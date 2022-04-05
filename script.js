//membuat objeck Bison Amanatul
function Angkot(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;
}

var angkot1 = new Angkot("Cak Idris", ["Surabaya", "Sidoarjo"], [], 0);
