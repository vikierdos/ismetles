import Kartyak from "./view/Kartyak.js";
import { kutyaLISTA } from "./adatok.js";


const kivalasztottLista=[];
const taroloElem = $(".tartalom");
const kivElem = $(".kivalasztott");

new Kartyak(kutyaLISTA, taroloElem);

//tegyük a kiválasztott kutya adatait a kivalasztottLista

//itt feliratkozunk a kartya osztalyban letrehozott saját eseményünkre

$(window).on("kivalaszt", (event)=>{
    console.log(event.detail);
    kivalasztottLista.push(event.detail);
    console.log(kivalasztottLista);
    new Kartyak(kivalasztottLista, kivElem);
})