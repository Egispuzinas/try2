// Objektai gali tureti "properties";
// methods();
console.log('Objektai');
var studentas={
    name:'Egidijus',
    surname:'Puzinas',
    dob:1991,
    address: 'Vilnius, Grudu sodu 6-oji. 8',
    mathpoints: [9,8,7,5,6,2,4,1,5,5,4,7,9],
    familyMemb: {
        mama:'Regina',
        tetis:'Jonas',
        brolis:'Edvinas'
    },
    getInfo: function() {
        console.log(studentas.name);
        console.log(studentas.surname);
        console.log(sum/studentas.mathpoints.length);
        console.log(this.dob);//this issaukia is to pacio objekto.
    },
    getFamily: function() {
        console.log(this.familyMemb.mama);
        console.log(this.familyMemb.tetis);
        console.log(this.familyMemb.brolis);
    },
    getPoints: function () {
        for (var i = 0; i < this.mathpoints.length; i++) {
            console.log(this.mathpoints[i]);
        }
    },
    getAge: ()=> {
        console.log(2017-studentas.dob);//Cia this.dob nesuveikia.
    }
}
var lastpoint=studentas.mathpoints.length-1;
var sum=0;
console.log(studentas.mathpoints[lastpoint]);
for (var i = 0; i < studentas.mathpoints.length; i++) {
    sum+=studentas.mathpoints[i];
}
console.log(sum);
console.log(sum/studentas.mathpoints.length);
studentas.getInfo();
studentas.getFamily();
studentas.getAge();


//--------------------Kasos Aparatas

var prekes=[{
    name:'Tapke',
    price:15,
    dom: 2015
},{
    name:'Ranksluostis',
    price:20,
    dom:2016
},{
    name:'Stalas',
    price:115,
    dom:2012
},{
    name:'Liustra',
    price:45.50,
    dom: 2002
}];
console.log(prekes[1].name);

var d = new Date();
var n = d.getFullYear();

function sudeti() {
    suma=0;
    for (var i = 0; i < prekes.length; i++) {
            suma+=prekes[i].price;
    }
    console.log('prekiu suma= '+suma);
};
function amzius() {
    x=0;
    for (var i = 0; i < prekes.length; i++) {
        x=n-prekes[i].dom;
        console.log('prekei jau '+x);
    }
}
sudeti();
amzius();

for (var i = 0; i < prekes.length; i++) {
    console.log(prekes[i].name)
}
 // var kazkas = function(){
//    console.log('kazkas');}

//kazkas();

// var zmogus={
//     amzius:19,
//     spalva:'Juoda',
//     plaukuSpalva:'Juoda',
//     Teitumas:'Teistas',
//     Vardas:'Uknown'
// }
// forEach ciklas
/* prekes.forEach(function(el) {
    console.log(el.price);
});*/

var trikampis={
    a: 3,
    b: 4,
    color: 'white',
    getIzamb: function() {
    return Math.sqrt(this.a*this.a+this.b*this.b);
    },
    getArea: function() {
        return this.a*this.b/2;
    },
    getPer: function() {
        return this.a+this.b+this.getIzamb();
    },
    getColor: function() {
        console.log('Spalva '+this.color);
    }
}
console.log('Izambine '+trikampis.getIzamb());
console.log('Plotas '+trikampis.getArea());
console.log('Perimetras '+trikampis.getPer());
console.log('---------------------------');

var trikampiai=[{
a: 10,
b: 8,
Izamb: function() {
    return Math.sqrt(this.a*this.a+this.b*this.b);
},
Perim: function(){
    return this.a+this.b+this.Izamb()
},
Plotas: function(){
    return this.a*this.b/2
}
},{
a: 4,
b: 5,
Izamb: function() {
    return Math.sqrt(this.a*this.a+this.b*this.b);
},
Perim: function(){
    return this.a+this.b+this.Izamb()
},
Plotas: function(){
    return this.a*this.b/2
}
},{
a: 12,
b: 12,
Izamb: function() {
    return Math.sqrt(this.a*this.a+this.b*this.b);
},
Perim: function(){
    return this.a+this.b+this.Izamb()
},
Plotas: function(){
    return this.a*this.b/2
}
}];
maxIzamb=0;
for (var i = 0; i < trikampiai.length; i++) {
    indexI=0;
    if (trikampiai[i].Izamb()>maxIzamb) {
        maxIzamb=trikampiai[i].Izamb();
        if(maxIzamb=trikampiai[i].Izamb()){
            indexI=i;
        }
    }
};
maxPlotas=0;
for (var i = 0; i < trikampiai.length; i++) {
    indexP=0;
    if(trikampiai[i].Plotas()>maxPlotas){
        maxPlotas=trikampiai[i].Plotas();
        if (maxPlotas=trikampiai[i].Plotas()) {
            indexP=i;
        }
    }
}
maxPerim=0;
for (var i = 0; i < trikampiai.length; i++) {
    indexPer=0;
    if(trikampiai[i].Perim()>maxPerim){
        maxPerim=trikampiai[i].Perim();
        if (maxPerim=trikampiai[i].Perim()) {
            indexPer=i;
        }
    }
}
console.log('didziausia izambine '+ maxIzamb.toFixed(2)+' ir trikampio Indexas= ' +indexI);
console.log('didziausias plotas ' +maxPlotas.toFixed(2)+ ' trikampio Indexas= '+indexP);
console.log('didziausias Perimetras '+maxPerim.toFixed(2)+' trikampio Indexas= '+indexPer);
