document.addEventListener("DOMContentLoaded", function(event) {

    var donemListesi = [];

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
        ders.dersKredi = "6";
        ders.dersHarfNotu = "AA";
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
        document.getElementById("cont_1").innerHTML == "";
        document.getElementsByName("body").innerHTML == "";
        let baslik = `<h1 id="transcript" class=" container well well-sm col-lg-12">Canlı Transkript</h1>`;
        document.getElementById("cont_1").innerHTML += baslik;

        donemSayisi = document.getElementById("donemGir").value;
        dersSayisi = document.getElementById("dersGir").value;

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
                        <input style="width:100%; id="ders_Adi_${ders.ID}"; class="transparent-input col-2 col-lg-12 col-md-12 col-sm-6 " type=" text " placeholder="Ders ${index2 +1}">
                    </td>
                    <td>
                        <div style="align-items: center; " class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <select id="ddselect_kredi_${ders.ID}" class="form-control">
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
            <div id="tableContainer_${index}" class="col-lg-6 col-md-6 col-sm-12 col-12">
             
            <h1 style="background-color: rgb(0, 166, 164); text-align: center; margin: 0; color: rgb(232, 249, 250);" class="well-sm">
                ${index+1}.Dönem <span id="ders_ekle_button_${donem.ID}" class="material-icons">add_circle_outline</span>
            </h1>
            
                <table class="table table-striped table-bordered col-lg-6" id="donem_table_${donem.ID}">


                <thead>
                    <tr>
                        <th class="col-lg-7 col-md-6 col-sm-8 col-2" style="text-align: center;">Ders Adı</th>
                        <th class="col-lg-2 col-md-3 col-sm-2 col-5" style="text-align: center;">Kredi</th>
                        <th class="col-lg-2 col-md-3 col-sm-2 col-5" style="text-align: center;">Not</th>
                        <th class="col-lg-1" style="text-align: center;">Sil</th>
                    </tr>
                </thead>
                <tbody id="donem_tbody_${donem.ID}">
                    ${dersListesiHTMLStr}
                </tbody>
                </table>
                <!-- Dönem Bilgileri  -->
                        <table class="table table-striped ">
                            <thead>
                                <th>Alınan Kredi</th>
                                <th>YANO</th>
                                <th>GANO</th>
                            </thead>
                            <tbody id="donem_notları_${donem.ID}">
                                <td id="toplam_kredi_donem_${donem.ID}">---</td>
                                <td id="yano_donem_${donem.ID}">---</td>
                                <td id="gano_donem_${donem.ID}">---</td>
                            </tbody>
                        </table>
                        <!-- Dönem Bilgileri Bitiş -->

                </div>
 
        `;
        }

        document.getElementById("cont_1").innerHTML += htmlStr;
        console.log(donemListesi);
        localStorage.setItem("Notlar", JSON.stringify(donemListesi));
        // var objFromStorage = JSON.parse(localStorage.getItem("Notlar"));

        // console.log(objFromStorage);
        setClickEvents();

    }
    function setClickEvents(){
        $('.deleteDers').unbind("click").on("click",function(){
            let id = $(this).data("id");
            console.log("Silinecek ders IDsi:",id);
        });
    }

    function hesapla() {
        let yanoToplam = 0;
        let birik_puan = 0;
        let birik_tam_akts = 0;


        for (let index = 0; index < donemListesi.length; index++) { // Dönem Sayısı

            let toplamDonemPuani = 0;
            let toplamDonemKredisi = 0;
            let alinanPuan = 0;
            let donem = donemListesi[index];

            for (let index2 = 0; index2 < donem.DersListesi.length; index2++) { // Ders Sayısı




                let ders_ID = donemListesi[index].DersListesi[index2].ID;

                // let alinanDersAdi = document.getElementById("ders_Adi_" + `${ders_ID}`).value;
                // donemListesi[index].DersListesi[index2].dersAdi = alinanDersAdi;

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
                //console.log(alinanPuan);


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

            //gano = birikimliPuan / birikimliTamamlananAkts

            // console.log(donemListesi[index].birikimliPuan);
            // console.log(donemListesi[index].birikimliTamamlananAkts);
            // console.log(birik_tam_akts);
            gano = donemListesi[index].birikimliPuan / birik_tam_akts;
            console.log(gano);
            // yanoToplam += Number(donemListesi[index].yano);
            // donemListesi[index].gano = (yanoToplam / (index + 1)).toFixed(2);

            donemListesi[index].gano = gano.toFixed(2);
            if (isNaN(donemListesi[index].gano)) {
                donemListesi[index].gano = 0;
                document.getElementById("gano_donem_" + `${donem.ID}`).innerHTML = "---";
            } else {
                document.getElementById("gano_donem_" + `${donem.ID}`).innerHTML = donemListesi[index].gano;
            }




            // document.getElementById("donem_notları_" + `${donem.ID}`).classList.add("alert");
            // document.getElementById("donem_notları_" + `${donem.ID}`).classList.add("alert-danger");
            // document.getElementById("gano_donem_" + `${donem.ID}`).classList.add("alert-success");
            // document.getElementById("yano_donem_" + `${donem.ID}`).classList.add("alert-info");
            // document.getElementById("toplam_kredi_donem_" + `${donem.ID}`).classList.add("alert-warning");

        }


        localStorage.setItem("Notlar", JSON.stringify(donemListesi));
        var objFromStorage = JSON.parse(localStorage.getItem("Notlar"));

        for (let index = 0; index < 8; index++) {
            // var objFromStorage = JSON.parse(localStorage.getItem("Notlar"));
            // console.log(objFromStorage[index].ID);
            // console.log(objFromStorage[index].DersListesi[0].dersHarfNotu);

            for (let index2 = 0; index2 < 6; index2++) {

            }
        }
    }



    $("#hesaplaBtn").click(function() {
        hesapla();
        //$("#hesaplaBtn").css("display", "none");
    });
    // 
    // 
    // 



    function getRandomID() {
        var S4 = function() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return S4() + S4() + S4();
    }

    // doldur();

    function birDersSil() {
        for (let index = 0; index < donemListesi.length; index++) {
            let donem = donemListesi[index];
            for (let index2 = 0; index2 < donem.DersListesi.length; index2++) {
                let ders_ID = donemListesi[index].DersListesi[index2].ID;
                let silID = document.getElementById("delBtn_" + `${ders_ID}`);

                silID.addEventListener("mouseover", function() {

                });


                silID.addEventListener("click", function() {
                    donemListesi[index].DersListesi[index2].deleted = true;
                    console.log(silID);
                    var row = silID.parentNode.parentNode;
                    row.parentNode.removeChild(row);
                    donemListesi[index].DersListesi.splice(index2, 1);
                    // delete donemListesi[index].DersListesi[index2];
                    // donem.DersListesi.length = donem.DersListesi.length - 1
                    // donem.DersListesi.length = donem.DersListesi.length - 1;



                });
            }
        }
    }




    function birDersEkle() {


        for (let index = 0; index < donemListesi.length; index++) { // 8- dönem sayısı
            let donem = donemListesi[index];
            let ekle_button_ID = document.getElementById("ders_ekle_button_" + `${donem.ID}`);

            ekle_button_ID.addEventListener("click", function() {

                var ders = dersEkle(donem.ID);
                donem.DersListesi.push(ders);
                console.log(donemListesi);
                localStorage.setItem("Notlar", JSON.stringify(donemListesi));


                for (let index2 = 0; index2 < donem.DersListesi.length; index2++) {
                    let ders = donem.DersListesi[index2];
                    dersListesiHTMLStr = `
                
        <tr id="ders_tr_${ders.ID}">
        <td>
            <input style="width:100%; id="ders_Adi_${ders.ID}"; class="transparent-input col-2 col-lg-12 col-md-12 col-sm-6 " type=" text " placeholder="Ders ${index2 +1}">
        </td>
        <td>
            <div style="align-items: center; " class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <select id="ddselect_kredi_${ders.ID}" class="form-control">
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

                let donemSec = document.getElementById("donem_tbody_" + `${donem.ID}`);
                donemSec.innerHTML += dersListesiHTMLStr;
                setClickEvents();

            });
        }
    }


    $("#tabloGetirBtn").click(function() {
        doldur();
        birDersSil();
        birDersEkle();
        //güncelle()

    });


    function getFromUI() {
        var objFromStorage = JSON.parse(localStorage.getItem("Notlar"));
        console.log(objFromStorage);
    }

    getFromUI();


    // function deleteRow() {
    //     let i = r.parentNode.parentNode.rowIndex;
    //     let j = r.parentNode.parentNode.parentNode.parentNode.deleteRow(i);
    // }

    // function mouseOver(r) {
    //     r.style.color = "red";
    // }

    // function mouseOut(r) {
    //     r.style.color = "black";
    // }


});