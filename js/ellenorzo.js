function validal() {
    var form = document.forms['adatok'];
    //var form = document.getElementById('adatok');
    //form.getElementById('profilkep')


    var vezeteknev = form["vezeteknev"].value;
    if(vezeteknev.trim().length <2){
        alert("Túl rövid vezetéknév");
        return false;
    }

    var jelszo = form["jelszo"].value;
    console.log(jelszo);
var jelszoMinta = new RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d]{8,}$');
if (!jelszoMinta.test(jelszo)){
    alert("A jelszónak tartalmaznia kell legalább egy kisbetűt, " +
        "egy nagybetát, egy számot és legalább 8 hosszú");
    return false;
}
    var file = form["profilkep"].value;

    var elfogadhato_kiterjesztesek = new Array("jpeg",
        "jpg", "png", "bmp", "jfif", "gif");
    var kiterjesztes = file.split('.').pop().toLowerCase();
    //var javitott = '.'+kiterjesztes;
    if (!elfogadhato_kiterjesztesek.includes(kiterjesztes)) {
        alert("Rossz fájlformátum");
        return false;
    }
    var szuletesi_datum = form['szuletesi_datum'].value;
    if(szuletesi_datum > form['szuletesi_datum'].max){
        alert('De fiatal vagy még ide !');
        return false;
    }

    console.log(vezeteknev);
    return true;
}

window.addEventListener("load", function () {
    var ma = new Date();
    ma.setFullYear(ma.getFullYear()-16);
    var korhatar = ma.toISOString().slice(0,10);
    var datummezo = document.getElementById("szuletesi_datum");
    datummezo.max = korhatar;
    document.getElementById("cica").classList.add("villog");



})

function megjelenit(){
    //var images= document.getElementsByTagName('img');
    var images = document.getElementsByClassName("villog");
    //var images = document.querySelectorAll("img[src^='images/cats']");
    console.log(images);
    for (const image of images) {
        image.style.display="block";
    }
    document.getElementById("body").style.animationName = "pulse";
    document.getElementById("body").style.animationDuration = "0.1s";
    document.getElementById("body").style.animationIterationCount="infinite";

    setTimeout(function (){
            for (const image of images) {
                image.style.display="none";
            }
            document.getElementById("body").style.animationName = "none";

        }
    ,500);
}



