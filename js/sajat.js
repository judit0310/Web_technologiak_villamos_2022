//document.write("<h1>Cica</h1>")

let sum = function (a, b) {
    let osszeg = a + b;
    return osszeg;
}
/*
for (var i = 0; i < 5; i++) {
    console.log("Inside the loop:", i);
}

console.log("Outside the loop:", i);

for (let j = 0; j < 5; j++) {
    console.log("Inside the loop:", j);
}

console.log("Outside the loop:", j);*/
console.log(sum(2, 3));

function sajat(nev = "Némó") {
    console.log("Hello " + nev);
}

//sajat();
//sajat("Béla");

let koszon = a => console.log("Hello " + a);
koszon("Béla");

var kor = 25;
if (kor < 18) {
    console.log("Kiskorú");
} else if (kor == 18) {
    console.log("végre ihatsz legálisan");
} else {
    console.log("Nagykorú");
}

console.log(kor < 18 ? "Kiskorú" : "Nagykorú");

var day;
switch (new Date().getDay()) {
    case 1:
        day = "Hétfő";
        break;
    case 2:
        day = "Kedd";
        break;
    case 3:
        day = "Szerda";
        break;
    case 4:
        day = "Csütörtök";
        break;
    case 5:
        day = "Péntek";
        break;
    case 6:
    case 0:
        day = "Másnap";
        break;
}
var nev = "béla";
switch (nev) {
    case "Béla":
        console.log("Béla");
        break;
}

console.log(day);

var szemely = {
    keresztnev: "Béla",
    vezeteknev: "Kovács",
    kor: 25,
    teljesnev: function () {
        return this.vezeteknev + " " + this.keresztnev;
    }
}
console.log(szemely);
console.log(szemely.teljesnev());

class Szemely{
    constructor(keresztnev, vezeteknev, kor) {
        this.keresztnev = keresztnev;
        this.vezeteknev = vezeteknev;
        this.kor = kor;
        this.teljesnev = ()=> this.vezeteknev +" "+this.keresztnev;
    }
}

var szemely2 = new Szemely("Béla","Kiss",23);
console.log(szemely2.teljesnev());

console.log(JSON.stringify(szemely2));

function szovegValtoztats(elem){
    if(confirm("Biztos meg szeretné változtatni?")){
        elem.innerHTML="Hoppá";
        elem.style.color="#"+Math.floor(Math.random()*16777215).toString(16);
    }
}

console.log(window.location.href);
console.log(window.innerWidth);
console.log(window.location.hostname);
console.log(window.location.port);
console.log(window.location.pathname);
var params = new URLSearchParams(window.location.search);
for (let p of params){
    console.log(p);
}

