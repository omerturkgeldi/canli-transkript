var donemListesi = [];


// function deleteFromList(list, tobeDeletedID) {
//     var newList = [];
//     for (let index = 0; index < silinecekListe.length; index++) {
//         const donem = silinecekListe[index];
//         if (donem.ID != silinecekID) {
//             newList.push(donem);
//         }
//     }
//     return newList;
// }

function hamburgerButton() {
    const toggleButton = document.getElementsByClassName('toggle-button')[0]
    const navbarLinks = document.getElementsByClassName('navbar-links')[0]

    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active')
    })
}

document.addEventListener("DOMContentLoaded", function(event) {

    // if (localStorage.getItem("Notlar") !== null && localStorage.getItem("Notlar").length >= 2) {
    //     getFromLocalStorage();
    // }
    hamburgerButton();
    getFromLocalStorage();

    // donemEkle(order);
    // dersEkle(donemID);
    // doldur();
    setClickEvents();


    // hesapla();
    // birDersSil();



    function donemEkle(order) {
        var donem = new Object();
        donem.ID = getRandomID();
        donem.DonemAdi = order + ". Dönem";
        // donem.toplamKredi = 30; // donem.yariyilAlinanAkts
        // donem.toplamPuan = 15; // donem.yariyilPuan
        donem.yano = 0.00;
        donem.gano = 0.00;
        donem.yariyilTamamlananAkts = 0;
        donem.birikimliTamamlananAkts = 0;
        donem.yariyilPuan = 0;
        donem.birikimliPuan = 0;
        donem.DersListesi = [];
        return donem;


    }

    function dersEkle(donemID) {
        var ders = new Object();
        ders.ID = getRandomID();
        ders.DonemID = donemID;
        ders.deleted = false;
        ders.dersAdi = "deneme"; // "Data Structures";
        ders.dersKredi = "";
        ders.dersHarfNotu = "";
        // ders.dersPuani
        switch (ders.dersHarfNotu) {
            case 'AA':
                ders.dersPuani = (ders.dersKredi) * (4.00);
                break;
            case 'BA':
                ders.dersPuani = (ders.dersKredi) * (3.50);
                break;
            case 'BB':
                ders.dersPuani = (ders.dersKredi) * (3.00);
                break;
            case 'CB':
                ders.dersPuani = (ders.dersKredi) * (2.50);
                break;
            case 'CC':
                ders.dersPuani = (ders.dersKredi) * (2.00);
                break;
            case 'DC':
                ders.dersPuani = (ders.dersKredi) * (1.50);
                break;
            case 'DD':
                ders.dersPuani = (ders.dersKredi) * (1.00);
                break;
            case 'FD':
                ders.dersPuani = (ders.dersKredi) * (0.50);
                break;
            case 'FF':
                ders.dersPuani = (ders.dersKredi) * (0.00);
                break;
        }
        return ders;

    }

    function doldur() {
        document.getElementById("cont_1").innerHTML = "";
        donemListesi = [];
        let baslik = `<h1 id="transcript" class=" container well well-sm col-lg-12">Canlı Transkript</h1>`;
        document.getElementById("cont_1").innerHTML = baslik;

        donemSayisi = document.getElementById("donemGir").value;
        // dersSayisi = document.getElementById("dersGir").value;
        dersSayisi = 5;

        for (let index = 0; index < donemSayisi; index++) { // 8- dönem sayısı
            var donem = donemEkle(index + 1);
            for (let index2 = 0; index2 < dersSayisi; index2++) { // 6- ders sayısı
                var ders = dersEkle(donem.ID);
                if (ders.deleted == false) {
                    donem.DersListesi.push(ders);
                }

            }
            donemListesi.push(donem);
        }

        let htmlStr = ``;
        for (let index = 0; index < donemListesi.length; index++) {
            let donem = donemListesi[index];
            let dersListesiHTMLStr = ``;

            for (let index2 = 0; index2 < donem.DersListesi.length; index2++) {
                let ders = donem.DersListesi[index2];

                dersListesiHTMLStr += `
            
                    <tr id="ders_tr_${ders.ID}">
                    <td>
                        <input style="width:100%;" name="DersAdi" id="ders_Adi_${ders.ID}"; class="transparent-input col-2 col-lg-12 col-md-12 col-sm-6 " type=" text " placeholder="Ders ${index2 +1}">
                    </td>
                    <td>
                        <div style="align-items: center; " class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <select data-krediID="${ders.ID}" id="ddselect_kredi_${ders.ID}" class=" krediID form-control">
                                    <option value="">X</option>   
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                </select>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="row ">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <select id="ddselect_harf_${ders.ID}" class="form-control ">
                                        <option value="">X</option>          
                                        <option value="AA">AA</option>
                                        <option value="BA">BA</option>
                                        <option value="BB">BB</option>
                                        <option value="CB">CB</option>
                                        <option value="CC">CC</option>
                                        <option value="DC">DC</option>
                                        <option value="DD">DD</option>
                                        <option value="FD">FD</option>
                                        <option value="FF">FF</option>
                                    </select>
                            </div>
                        </div>
                    </td>
                    <td>
                        
                        <span id="delBtn_${ders.ID}" data-id="${ders.ID}" class="material-icons deleteDers">clear</span>
                    </td>
                </tr>
            `;
            }

            htmlStr += `
            <div id="tableContainer_${index}"class="col-lg-6 col-md-6 col-sm-12 col-12">
             
            <h1 style="background-color: rgb(0, 166, 164); text-align: center; margin: 0; color: rgb(232, 249, 250);" class="well-sm">
                ${index+1}.Dönem <span class="material-icons dersEkleButton" data-id="${donem.ID}">add_circle_outline</span>
            </h1>
            
                <table class="table table-striped table-bordered col-lg-6" id="donem_table_${donem.ID}">
    
    
                <thead class="row">
                    <tr>
                        <th class="col-lg-7 col-md-6 col-sm-8 col-xs-4 col-3" style="text-align: center;">Ders Adı</th>
                        <th class="col-lg-2 col-md-3 col-sm-2 col-xs-3 col-4" style="text-align: center;">Kredi</th>
                        <th class="col-lg-2 col-md-3 col-sm-2 col-xs-3 col-4" style="text-align: center;">Not</th>
                        <th class="col-lg-1 col-md-1 col-sm-1 col-xs-1 col-1" style="text-align: center;">Sil</th>
                    </tr>
                </thead>
                <tbody data-id="${donem.ID}" id="donem_tbody_${donem.ID}">
                    ${dersListesiHTMLStr}
                </tbody>
                </table>
                <!-- Dönem Bilgileri  -->
                        <table class="table table-striped ">
                            <thead>
                                <th>Alınan Kredi</th>
                                <th style="text-align: center">YANO</th>
                                <th style="text-align: center">GANO</th>
                            </thead>
                            <tbody id="donem_notları_${donem.ID}">
                                <td id="toplam_kredi_donem_${donem.ID}">---</td>
                                <td style="text-align: center" id="yano_donem_${donem.ID}">---</td>
                                <td style="text-align: center" id="gano_donem_${donem.ID}">---</td>
                            </tbody>
                        </table>
                        <!-- Dönem Bilgileri Bitiş -->
    
                </div>
    
        `;


        }

        document.getElementById("cont_1").innerHTML += htmlStr;

        // console.log(donemListesi);
        // localStorage.setItem("Notlar", JSON.stringify(donemListesi));
        // var objFromStorage = JSON.parse(localStorage.getItem("Notlar"));

        // console.log(objFromStorage);
        setClickEvents();


    }


    function setClickEvents() {
        // Ders Silme buton eventi:

        $('.deleteDers').unbind("click").on("click", function() {
            let id = $(this).data("id");
            // console.log($("[data-id='" + `${id}` + "']"));

            // let kredisdf = $('.krediID').data("krediID");
            // console.log(kredisdf);


            let getDeleteElement = document.querySelector('[data-id=' + `${id}` + ']');
            let getRow = getDeleteElement.parentElement.parentElement;

            // console.log(getRow.parentElement);
            let silinen_dersin_donem_id = $(getRow.parentElement).attr("data-id")
            console.log("Silinen dersin dönem idsi: ", silinen_dersin_donem_id);
            getRow.parentNode.removeChild(getRow);



            var getDonem = donemListesi.find(x => x.ID == silinen_dersin_donem_id);
            var getDers = getDonem.DersListesi.find(x => x.ID == id);
            console.log("getDers: ", getDers);
            var indexx = getDonem.DersListesi.findIndex(x => x.ID == id)
            console.log(indexx);

            getDonem.DersListesi.splice(indexx, 1);
            console.log("dönem listesi", donemListesi);

            console.log("Silinecek ders IDsi:", id);
            guncelle_placeholder();
            localStorage.setItem("Notlar", JSON.stringify(donemListesi));

        });


        // Yeni ders ekleme buton eventi:

        $('.dersEkleButton').unbind("click").on("click", function() {
            let donemID = $(this).data("id");
            console.log("DOnemin IDsi: " + donemID);

            let getAddElement = document.querySelector('[data-id=' + `${donemID}` + ']');
            console.log(getAddElement);

            var donem = donemListesi.find(x => x.ID == donemID);
            console.log("Dönemi buldum:", donem);
            var donem_Index = Number(donem.DonemAdi.charAt(0));
            // console.log(donemListesi[donem_Index].DersListesi);
            // console.log(donem.DersListesi);
            // console.log(getAddElement.parentElement.nextElementSibling.childNodes[3]);


            // var tbody_Sec = getAddElement.parentElement.nextElementSibling.childNodes[3];
            // var ders_eklenecek_donem = $(tbody_Sec).attr("data-id");
            // console.log(ders_eklenecek_donem);
            var ders = dersEkle(donemID);
            // console.log(ders);
            donem.DersListesi.push(ders);
            // console.log(donemListesi);
            // console.log(tbody_Sec);
            // localStorage.setItem("Notlar", JSON.stringify(donemListesi));

            let dersListesiHTMLStr = ``;
            dersListesiHTMLStr += `
            
                    <tr id="ders_tr_${ders.ID}">
                    <td>
                        <input style="width:100%;" name="DersAdi" id="ders_Adi_${ders.ID}"; class="transparent-input col-2 col-lg-12 col-md-12 col-sm-6 " type=" text " placeholder="Ders ${1}">
                    </td>
                    <td>
                        <div style="align-items: center; " class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <select data-krediID="${ders.ID}" id="ddselect_kredi_${ders.ID}" class=" krediID form-control">
                                    <option value="">X</option>   
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                </select>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="row ">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <select id="ddselect_harf_${ders.ID}" class="form-control ">
                                        <option value="">X</option>          
                                        <option value="AA">AA</option>
                                        <option value="BA">BA</option>
                                        <option value="BB">BB</option>
                                        <option value="CB">CB</option>
                                        <option value="CC">CC</option>
                                        <option value="DC">DC</option>
                                        <option value="DD">DD</option>
                                        <option value="FD">FD</option>
                                        <option value="FF">FF</option>
                                    </select>
                            </div>
                        </div>
                    </td>
                    <td>
                        
                        <span id="delBtn_${ders.ID}" data-id="${ders.ID}" class="material-icons deleteDers">clear</span>
                    </td>
                </tr>
            `;


            let donemSec = document.getElementById("donem_tbody_" + `${donemID}`);
            // donemSec.innerHTML += dersListesiHTMLStr;
            donemSec.insertAdjacentHTML('beforeend', dersListesiHTMLStr);
            guncelle_placeholder();
            localStorage.setItem("Notlar", JSON.stringify(donemListesi));
            setClickEvents();

        });

        // Hesapla Butonu

        $("#hesaplaBtn").unbind("click").on("click", function() {
            hesapla();
            //$("#hesaplaBtn").css("display", "none");
        });


        // Tablo Oluşturma

        $("#tabloGetirBtn").click(function() {
            doldur();
            localStorage.setItem("Notlar", JSON.stringify(donemListesi));


        });

        //Localden tabloyu çekme

        $("#localStorageTabloBtn").click(function() {
            // getFromLocalStorage();
        });

    }


    function hesapla() {
        let yanoToplam;
        let birik_puan = 0;
        let birik_tam_akts = 0;

        for (let index = 0; index < donemListesi.length; index++) { // Dönem Sayısı
            let toplamDonemPuani = 0;
            let toplamDonemKredisi = 0;
            let alinanPuan = 0;
            let donem = donemListesi[index];

            for (let index2 = 0; index2 < donem.DersListesi.length; index2++) { // Ders Sayısı


                let ders_ID = donemListesi[index].DersListesi[index2].ID;

                let alinanDersAdi = document.getElementById("ders_Adi_" + `${ders_ID}`).value;
                donemListesi[index].DersListesi[index2].dersAdi = alinanDersAdi;

                let alinanKredi = document.getElementById("ddselect_kredi_" + `${ders_ID}`).value;
                donemListesi[index].DersListesi[index2].dersKredi = alinanKredi;

                let alinanHarfNotu = document.getElementById("ddselect_harf_" + `${ders_ID}`).value;
                donemListesi[index].DersListesi[index2].dersHarfNotu = alinanHarfNotu;

                // if (alinanDersAdi != "") {
                //     // console.log(alinanDersAdi);
                //     donemListesi[index].DersListesi[index2].dersAdi = "-";
                // }


                switch (alinanHarfNotu) {
                    case 'AA':
                        alinanPuan = (alinanKredi) * (4.00);
                        break;
                    case 'BA':
                        alinanPuan = (alinanKredi) * (3.50);
                        break;
                    case 'BB':
                        alinanPuan = (alinanKredi) * (3.00);
                        break;
                    case 'CB':
                        alinanPuan = (alinanKredi) * (2.50);
                        break;
                    case 'CC':
                        alinanPuan = (alinanKredi) * (2.00);
                        break;
                    case 'DC':
                        alinanPuan = (alinanKredi) * (1.50);
                        break;
                    case 'DD':
                        alinanPuan = (alinanKredi) * (1.00);
                        break;
                    case 'FD':
                        alinanPuan = (alinanKredi) * (0.50);
                        break;
                    case 'FF':
                        alinanPuan = (alinanKredi) * (0.00);
                        break;
                }

                donemListesi[index].DersListesi[index2].dersPuani = alinanPuan;


                if (!(alinanHarfNotu == "") && !(alinanKredi == "")) {
                    // ikisinden biri boşsa toplam puana katma (İkisi de doluysa kat)
                    toplamDonemPuani += alinanPuan;
                    toplamDonemKredisi += Number(alinanKredi);

                }

            }
            //Alınan toplam kredi
            donemListesi[index].yariyilTamamlananAkts = toplamDonemKredisi;
            document.getElementById("toplam_kredi_donem_" + `${donem.ID}`).innerHTML = donemListesi[index].yariyilTamamlananAkts;
            birik_tam_akts += toplamDonemKredisi;
            donemListesi[index].birikimliTamamlananAkts = birik_tam_akts;



            //Puan
            donemListesi[index].yariyilPuan = toplamDonemPuani;
            birik_puan += toplamDonemPuani;
            donemListesi[index].birikimliPuan = birik_puan;





            //YANO
            yano = donemListesi[index].yariyilPuan / donemListesi[index].yariyilTamamlananAkts;
            donemListesi[index].yano = yano.toFixed(2);
            if (isNaN(donemListesi[index].yano)) {
                donemListesi[index].yano = 0;
                document.getElementById("yano_donem_" + `${donem.ID}`).innerHTML = "---";
            } else {
                document.getElementById("yano_donem_" + `${donem.ID}`).innerHTML = donemListesi[index].yano;
            }



            //GANO
            gano = donemListesi[index].birikimliPuan / birik_tam_akts;
            console.log(gano);


            donemListesi[index].gano = gano.toFixed(2);
            if (isNaN(donemListesi[index].gano)) {
                donemListesi[index].gano = 0;
                document.getElementById("gano_donem_" + `${donem.ID}`).innerHTML = "---";
            } else {
                document.getElementById("gano_donem_" + `${donem.ID}`).innerHTML = donemListesi[index].gano;
            }

            if (donemListesi[index].gano < 2) {
                document.getElementById("donem_notları_" + `${donem.ID}`).classList.add("alert");
                document.getElementById("gano_donem_" + `${donem.ID}`).classList.add("alert-danger");
            } else if (donemListesi[index].gano >= 3) {
                document.getElementById("donem_notları_" + `${donem.ID}`).classList.add("alert");
                document.getElementById("gano_donem_" + `${donem.ID}`).classList.add("alert-success");
            } else {
                document.getElementById("donem_notları_" + `${donem.ID}`).classList.add("alert");
                document.getElementById("gano_donem_" + `${donem.ID}`).classList.add("alert-info");
            }



        }


        localStorage.setItem("Notlar", JSON.stringify(donemListesi));
        var objFromStorage = JSON.parse(localStorage.getItem("Notlar"));

    }


    function getRandomID() {
        var S4 = function() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };

        // querySelector does not support ID selectors that start with a digit
        function makeid() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            for (var i = 0; i < 5; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        };

        return makeid() + S4() + S4() + S4();
    }


    function getFromLocalStorage() {
        if (localStorage.getItem("Notlar") === null || localStorage.getItem("Notlar").length <= 2) {
            alert("Kayıtlı Transkriptiniz Bulunmuyor...");
        } else {
            var objFromStorage = JSON.parse(localStorage.getItem("Notlar"));
            donemListesi = objFromStorage;

            console.log(objFromStorage);

            console.log(localStorage.getItem("Notlar").length == 0);


            document.getElementById("cont_1").innerHTML = "";
            // donemListesi = [];
            let baslik = `<h1 id="transcript" class=" container well well-sm col-lg-12 col-md-12 col-sm-12 col-12">Canlı Transkript</h1>`;
            document.getElementById("cont_1").innerHTML = baslik;

            donemSayisi = objFromStorage.length;
            console.log(donemSayisi);
            // dersSayisi = document.getElementById("dersGir").value;


            // let htmlStr = `<div class="row">`;
            let htmlStr = "";
            for (let index = 0; index < donemSayisi; index++) {
                let donem = objFromStorage[index];
                let dersListesiHTMLStr = "";

                console.log(donem);

                console.log("dönem.derslistesi.length", donem.DersListesi.length);
                for (let index2 = 0; index2 < donem.DersListesi.length; index2++) {
                    let ders = donem.DersListesi[index2];
                    console.log(donem.gano);

                    // console.log(document.getElementById("ddselect_kredi_" + `${ders.ID}`));
                    console.log("Dersin Kredisi: ", ders.dersKredi);
                    // ders.dersKredi == document.getElementById("ddselect_kredi_" + `${ders.ID}`).value;
                    // let krediIDAl = $(".krediID").data("krediID");



                    // $("#ddselect_kredi_" + +`${ders.ID}`).value = ders.dersKredi;
                    dersListesiHTMLStr += `
            
                    <tr id="ders_tr_${ders.ID}">
                    <td>
                        <input style="width:100%;" name="DersAdi" id="ders_Adi_${ders.ID}"; class="transparent-input col-4 col-lg-12 col-md-12 col-sm-4 " type=" text " value="${ders.dersAdi}" placeholder="Ders ${index2 + 1}">
                    </td>
                    <td>
                        <div style="align-items: center; " class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <select value="${ders.dersKredi}" data-krediID="${ders.ID}" id="ddselect_kredi_${ders.ID}" class=" krediID form-control">
                                    <option value="">X</option>   
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                </select>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="row ">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <select value="${ders.dersHarfNotu}" id="ddselect_harf_${ders.ID}" class="form-control dersHarfNotu">
                                        <option value="">X</option>          
                                        <option value="AA">AA</option>
                                        <option value="BA">BA</option>
                                        <option value="BB">BB</option>
                                        <option value="CB">CB</option>
                                        <option value="CC">CC</option>
                                        <option value="DC">DC</option>
                                        <option value="DD">DD</option>
                                        <option value="FD">FD</option>
                                        <option value="FF">FF</option>
                                    </select>
                            </div>
                        </div>
                    </td>
                    <td>
                        
                        <span id="delBtn_${ders.ID}" data-id="${ders.ID}" class="material-icons deleteDers">clear</span>
                    </td>
                </tr>
            `;


                }

                htmlStr += `
                    <div id="tableContainer_${index}" class="col-lg-6 col-md-6 col-sm-12 col-12">

                    <h1 style="background-color: rgb(0, 166, 164); text-align: center; margin: 0; color: rgb(232, 249, 250);" class="well-sm">
                        ${index+1}.Dönem <span class="material-icons dersEkleButton" data-id="${donem.ID}">add_circle_outline</span>
                    </h1>

                        <table class="table table-striped table-bordered col-lg-6" id="donem_table_${donem.ID}">


                        <thead class="row">
                            <tr>
                                <th class="col-lg-7 col-md-6 col-sm-8 col-xs-4 col-3" style="text-align: center;">Ders Adı</th>
                                <th class="col-lg-2 col-md-3 col-sm-2 col-xs-3 col-4" style="text-align: center;">Kredi</th>
                                <th class="col-lg-2 col-md-3 col-sm-2 col-xs-3 col-4" style="text-align: center;">Not</th>
                                <th class="col-lg-1 col-md-1 col-sm-1 col-xs-1 col-1" style="text-align: center;">Sil</th>
                            </tr>
                        </thead>
                        <tbody data-id="${donem.ID}" id="donem_tbody_${donem.ID}">
                            ${dersListesiHTMLStr}
                        </tbody>
                        </table>
                        <!-- Dönem Bilgileri  -->
                                <table class="table table-striped ">
                                    <thead>
                                        <th>Alınan Kredi</th>
                                        <th style="text-align: center">YANO</th>
                                        <th style="text-align: center">GANO</th>
                                    </thead>
                                    <tbody id="donem_notları_${donem.ID}">
                                        <td id="toplam_kredi_donem_${donem.ID}">${donem.yariyilTamamlananAkts}</td>
                                        <td style="text-align: center" id="yano_donem_${donem.ID}">${donem.yano}</td>
                                        <td style="text-align: center" id="gano_donem_${donem.ID}">${donem.gano}</td>
                                    </tbody>
                                </table>
                                <!-- Dönem Bilgileri Bitiş -->

                        </div>

                `;


            }

            // htmlStr += `</div>`;
            document.getElementById("cont_1").innerHTML += htmlStr;






            // Kredileri seçili olarak güncelle.
            $.each($(".krediID"), function(index, item) {
                $(item).val($(item).attr('value'));
            });

            $.each($(".dersHarfNotu"), function(index, item) {
                $(item).val($(item).attr('value'));
            });


            // console.log(donemListesi);
            // localStorage.setItem("Notlar", JSON.stringify(donemListesi));
            // var objFromStorage = JSON.parse(localStorage.getItem("Notlar"));

            setClickEvents();
            guncelle_placeholder();
            hesapla();

        }

    }


});




function denemeKodlari() {

}

function guncelle_placeholder() {
    // IDsini bildiğimiz dönemin içinde dönüp trleri alıyoruz...
    for (let index = 0; index < donemListesi.length; index++) {
        const donem = donemListesi[index];
        $('#donem_tbody_' + `${donem.ID}` + ' tr').each(function(index, item) {
            var $item = $(item);
            var dersAdiInput = $item.find("td input[name='DersAdi']");
            $(dersAdiInput).attr('placeholder', "Ders " + (index + 1));
        });
    }
}