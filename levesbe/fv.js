export function kutyakiir(kutya) {
  const tartalomELEM = $(".tartalom");
  tartalomELEM.append(`
        <div class="card col-lg-4 col-md-6">
        <div class="card-body">
            <h3 class="card-title">${kutya.nev}</h3>
            <p>kor: ${kutya.kor}</p>
            <p>nem: ${kutya.nem}</p>
            <button class="btn btn-success">Kiválaszt</button>
        </div>
        </div>
        `);
}
