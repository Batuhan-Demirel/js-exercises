function yillar() {
    
    var tarih = new Date().getFullYear();

    for (var i = tarih; i > 1949; i--) {
        var secenek = document.createElement("option");
        document.getElementById("aracYili").options.add(secenek);
        secenek.value = i;
        secenek.text = i;
    }
};


function vergiHesapla() {

    var aracTipi, aracGucu, aracYili;
    var odenecekVergi;
    var i;

    /*1. Döngü Araç Tipi Seçimi */
    for (i = 0; i < document.getElementById("aracTipi").length; i++) {

        if (document.getElementById("aracTipi").options[i].selected) {
            aracTipi = document.getElementById("aracTipi").options[i].value;

        } else if (document.getElementById("aracTipi").options[i].selected) {
            aracTipi = document.getElementById("aracTipi").options[i].value;
        };
        console.log(aracTipi)
    };

    /*2. Döngü Araç Tipi Seçimi */
    for (i = 0; i < document.getElementsByName("motorGucu").length; i++) {

        if (document.getElementsByName("motorGucu")[i].checked) {
            aracGucu = document.getElementsByName("motorGucu")[i].value;
        }

        console.log(aracGucu)
    };


    //3.döngü tarih
    for (i = 0; i < document.getElementById("aracYili").length; i++) {

        if (document.getElementById("aracYili").options[i].selected) {
            aracYili = document.getElementById("aracYili").options[i].value;
        }

        console.log(aracYili);
    };

    //Araç sorgula 
    if (aracTipi == "motor") {
        odenecekVergi = 100;

    } else if (aracTipi == "oto") {
        odenecekVergi = 200;
    } else {
        odenecekVergi = "Araç Tipi Seçiniz.."
    }
    //motor gucu Sorgula
    if (aracGucu == "999cc") {
        odenecekVergi += 50
    } else if (aracGucu == "1000cc-1600cc") {
        odenecekVergi += 100;
    } else if (aracGucu == "1601cc-2000cc") {
        odenecekVergi += 300;
    } else if (aracGucu == "2001cc") {
        odenecekVergi += 400;
    } else {
        odenecekVergi = "Araç Gücünü Seçiniz.."
    }
    //tarihi sorgula
    if (aracYili <= 2005) {
        odenecekVergi -= 25
    } else if (aracYili > 2005) {
        odenecekVergi == odenecekVergi;
    } else {
        odenecekVergi = "Araç Yılını Seçiniz.."
    }
    console.log(odenecekVergi);

    document.getElementById("sonuc").innerHTML = "Ödenecek Vergi Tutarı : " + odenecekVergi;


}