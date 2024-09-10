export default class Kartya {
  //adattagok
  #obj = {};
  #szuloElem;
  gombElem
  //constructor
  constructor(obj, szuloElem) {
    this.#obj = obj;
    this.#szuloElem = szuloElem;
    this.kutyakiir();
    this.gombElem = $(".kivalaszt:last");
    //console.log(this.gombElem);
    this.esemenykezelo();
  }
  //tagfüggvények
  kutyakiir() {
    this.#szuloElem.append(`
            <div class="card col-lg-4 col-md-6">
            <div class="card-body">
                <h3 class="card-title">${this.#obj.nev}</h3>
                <p>kor: ${this.#obj.kor}</p>
                <p>nem: ${this.#obj.nem}</p>
                <button class="btn btn-success kivalaszt">Kiválaszt</button>
            </div>
            </div>
            `);
  }

  //gomb

  esemenykezelo(){
    this.gombElem.on("click", ()=>{
        console.log(this);

        //létrehozunk egy saját eseményt

        const e = new CustomEvent("kivalaszt", {detail: this.#obj});
        window.dispatchEvent(e);
    })
  }
}
