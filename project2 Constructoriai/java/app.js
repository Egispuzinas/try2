console.log('Constror');

// Kuriam construktoriu trikampiui

function Triangle(a, b, spalva) {
    this.krastineA = a;
    this.krastineB = b;
    this.spalva= spalva;
    this.getArea = function() {
     var area = this.krastineA*this.krastineB/2;
     return area
    }
    this.getIzamb = function() {
        var izamb = Math.sqrt(this.krastineA*this.krastineA+this.krastineB*this.krastineB)
        return izamb
    }
    this.perim= function() {
        var per= this.krastineA+this.krastineB+this.getIzamb();
        return per;
    }
    this.getInfo = function() {
        console.log('plotas: ', this.getArea());
        console.log('izambine :', this.getIzamb());
        console.log('Perimetras ', this.perim());
    }
    this.compare = function(other) {
        if(this.krastineA>other.krastineA){
            console.log('trikampio',this.krastineA, this.spalva);
        }else {
            console.log('trikampio',this.krastineA, this.spalva);
        }
    }

};

var pirmas = new Triangle(8,3,'baltas')
var antras = new Triangle(5,4,'juodas')
console.log(pirmas);
var trikampiai = [new Triangle(5,4,'raudonas'), new Triangle(9,3,'zalia')];
// pirmas.getInfo();
// antras.getInfo();
pirmas.compare(antras)

console.log('---------------------');

for (var i = 0; i < trikampiai.length; i++) {
    trikampiai[i].getInfo();
}
console.log('----------------------');
var d = new Date();
var n = d.getFullYear();
function Preke(name, price, year) {
    this.name = name;
    this.price=price;
    this.year=year;
    this.timeSupply= function() {
        return d-this.year;
    }
}

var prekes = [new Preke('Adidas',75, 2015), new Preke('Nike', 80, 2014), new Preke('Abibas', 115, 2016), new Preke('Crocks', 7,2012), new Preke('Hike',34,2013), new Preke('Sluota ',15,2010)]
var suma=0;
for (var i = 0; i < prekes.length; i++) {
    suma+=prekes[i].price;
}
console.log(suma);
var brangiausia=0
for (var i = 0; i < prekes.length; i++) {
    if(brangiausia<prekes[i].price){
        brangiausia=prekes[i].price;
    }
}
var max=0;
var index=0;
prekes.forEach(function(el, i) {
        if(el.price>max){
            max=el.price;
            index=i;
        }
})
console.log(max, index);
console.log(brangiausia);
for (var i = 0; i < prekes.length; i++) {
    console.log('pavadinimai ir kaina: '+prekes[i].name, prekes[i].price);
}
var seniausia=0;
for (var i = 0; i < prekes.length; i++) {
    prekes[i].timeSupply;
}
var testas=document.querySelector('.test h1');
console.log('-------------------------');
// ND
//  Sukurti konstruktoriu Zaidejas su parametrais
//  Zaidejo vardas, zaistu varzybu kiekis, pelnytu
//  tasku kiekis, pramestu tasku kiekis
//  Metodai: atvaizduoti rezultatyvuma, vid tasku
//  kiekis per varzybas.

// sukurti kelis zaidejus naudojant Zaidejas konstr.
// sudeti tuos zaidejus i masyva.
// rasti taikliausia zaideja
// daugiausiai tasku pelniusi zaideja
function Zaidejas(name, played, scored, missed) {
    this.name = name;
    this.played=played;
    this.scored=scored;
    this.missed=missed;
    this.getEfi= function() {
        return this.played*this.scored/this.missed;
    }
    this.getAvg= function() {
        return this.scored/this.played;
    }
}

var playerOne= new Zaidejas('Rokas', 10, 80, 50);

console.log('rezultatyvumas ' +playerOne.getEfi());
console.log('Vidutinis tasku kiekis '+ playerOne.getAvg());

var players = [new Zaidejas('Rokas', 12, 75, 34), new Zaidejas('Tomas', 5, 81, 25), new Zaidejas('Lukas', 14, 80, 25), new Zaidejas('Romas', 10, 70, 30)];

var bestscorer=0;
for (var i = 0; i < players.length; i++) {
    if (players[i].getEfi()>bestscorer) {
        bestscorer=players[i].getEfi();
        if (bestscorer=players[i].getEfi()) {
            var bestname= players[i].name;
        }
    }
}
console.log(bestname , 'Su rezultatyvumu ' +bestscorer);
var maxScored=0;
for (var i = 0; i < players.length; i++) {
    if (players[i].scored>maxScored) {
        maxScored=players[i].scored;
        if (maxScored=players[i].scored) {
            var maxName=players[i].name;
        }
    }
}
console.log(maxName ,' Pelne ' +maxScored+ ' Taska');
