package main

import (
	"fmt"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"text/template"

	"github.com/gorilla/context"
	"github.com/gorilla/mux"
)

var templates *template.Template

func loadTemplates() {
	paths, err := getAllFilePathsInDirectory("templates")
	if err != nil {
		fmt.Println(err)
		return
	}
	templates = template.Must(template.New("").ParseFiles(paths...))
}

type Page struct {
	Channel string
	Host    string
}

func main() {
	loadTemplates()
	var r = mux.NewRouter()
	r.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		loadTemplates()
		var data Page
		data.Host = r.Host
		err := templates.ExecuteTemplate(w, "homeIndex", data)
		if err != nil {
			fmt.Println(err)
		}
	})

	fs := neuteredFileSystem{http.Dir("static")}
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(fs)))
	http.Handle("/", r)
	var port = os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	fmt.Println("Server working on:", port)
	http.ListenAndServe(":"+port, context.ClearHandler(http.DefaultServeMux))

}

type neuteredFileSystem struct {
	fs http.FileSystem
}

func (nfs neuteredFileSystem) Open(path string) (http.File, error) {
	f, err := nfs.fs.Open(path)
	if err != nil {
		return nil, err
	}

	s, err := f.Stat()
	if s.IsDir() {
		index := strings.TrimSuffix(path, "/") + "/index.html"
		if _, err := nfs.fs.Open(index); err != nil {
			return nil, err
		}
	}

	return f, nil
}

// getAllFilePathsInDirectory Klasör içerisindeki tüm template dosyalarını çeker.
func getAllFilePathsInDirectory(dirpath string) ([]string, error) {
	var paths []string
	err := filepath.Walk(dirpath, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}
		if !info.IsDir() {
			paths = append(paths, path)
		}
		return nil
	})
	if err != nil {
		return nil, err
	}
	return paths, nil
}

func getParamFromMux(r *http.Request, name string) (val string) {
	vars := mux.Vars(r)
	val = vars[name]
	return val
}
