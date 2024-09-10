import { kutyaLISTA } from "../adatok.js";
import Kartya from "../view/Kartya.js";
//import { kutyakiir } from "./fv.js";
// A kutyák adatait megjelenítenénk a tartalom divben külön divekben, egymás mellett az egyes kutyák adatait

//Változók
const cim = "Minden, amit a kutyáról tudni kell";
let nev = "Jenő";
nev = "Béla";
console.log("név: ", nev);

// A címet írjuk ki a headerbe a meglévő cím alá
// megfogjuk a html ellemet
const cimELEM = $("header");
console.log(cimELEM);
// beleírunk/hozzáfűzünk
cimELEM.append(`<p>${cim}</p>`);

//const kutya1={
//    nev:"Dézi",
//    kor: 12,
//    nem: "nőstény"
//};
// kutya1.nev = "Morzsa";
// console.log(kutya1);

console.log(kutyaLISTA[0].nev);

const tartalomELEM = $(".tartalom");

//kutyakiir(kutyaLISTA[0]);
