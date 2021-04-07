//Girdi değişkenleri
var urunTipi, urunSecimi, urunSayisi, urunTaksidi;

//Çıktı değişkenleri
var araToplam, odenecekToplamTutar, kargoUcreti = 7;

//Global döngü değişkeni
var i;

//Global nesne değişkenleri
var liste, secenek;

//Dizi tipindeki değişkenler
var erkekParfumleri = ["Calvin Clein", 100, "Lacoste", 120, "Axe", 30, "First Class", 50];
var kadinParfumleri = ["Burbery", 150, "Avon", 80, "She", 60, "Nina Ricci", 130];

function urunAdediDoldur() {
    for (i = 1; i <= 10; i++) {
        secenek = document.createElement("option");
        liste = document.getElementById("urunAdedi");
        liste.options.add(secenek);
        secenek.text = i;
        secenek.value = i;
    }
}

function urunTaksidiDoldur() {
    for (i = 0; i <= 12; i = i + 3) {
        secenek = document.createElement("option");
        liste = document.getElementById("urunTaksidi");
        liste.options.add(secenek);
        secenek.text = i;
        secenek.value = i;
    }
}

function urunleriGetir() {
    document.querySelectorAll('#urunListesi option').forEach(option => option.remove());

    liste = document.getElementsByName("urunTipi");
    for (i = 0; i < liste.length; i++) {
        if (liste[i].checked) {
            urunTipi = liste[i].value;
        }
    }

    if (urunTipi == "E") {
        for (i = 0; i < erkekParfumleri.length; i = i + 2) {
            secenek = document.createElement("option");
            liste = document.getElementById("urunListesi");
            liste.options.add(secenek);
            secenek.text = erkekParfumleri[i];
            secenek.value = erkekParfumleri[i + 1];
        }
    }
    else if (urunTipi == "K") {
        for (i = 0; i < kadinParfumleri.length; i = i + 2) {
            secenek = document.createElement("option");
            liste = document.getElementById("urunListesi");
            liste.options.add(secenek);
            secenek.text = kadinParfumleri[i];
            secenek.value = kadinParfumleri[i + 1];
        }
    }
}

function Hesapla(){
    liste=document.getElementById("urunListesi");
    urunSecimi=liste[liste.selectedIndex].value;
    
    liste=document.getElementById("urunAdedi");
    urunSayisi=liste[liste.selectedIndex].value;

    liste=document.getElementById("urunTaksidi");
    urunTaksidi=liste[liste.selectedIndex].value;

    if(urunTaksidi==3){
        araToplam=urunSecimi*urunSayisi *1.1
    }else if(urunTaksidi==6){
        araToplam=urunSecimi*urunSayisi *1.2
    }else if(urunTaksidi==9){
        araToplam=urunSecimi*urunSayisi *1.3
    }else if(urunTaksidi==12){
        araToplam=urunSecimi*urunSayisi *1.4
    }else{
        araToplam=urunSecimi*urunSayisi
    };

    document.getElementById("txtAraToplam").value = araToplam.toFixed(2);
    document.getElementById("txtBirimFiyat").value = urunSecimi;

    odenecekToplamTutar= araToplam+kargoUcreti

    if(araToplam<100){
        
        document.getElementById("txtKargo").value = kargoUcreti;
        odenecekToplamTutar= araToplam+kargoUcreti
    }else if(araToplam>=100){
        document.getElementById("txtKargo").value = 0;
        odenecekToplamTutar= araToplam
    }
    
    document.getElementById("ToplamFiyat").value = odenecekToplamTutar.toFixed(2);
}