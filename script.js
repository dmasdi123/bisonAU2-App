//membuat objeck Bison Amanatul
function Bison(sopir, trayek, penumpang, kas) {
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (namaPenumpang) {
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  };

  this.penumpangTurun = function (namaPenumpang, bayar) {
    if (this.penumpang.length == 0) {
      alert("Bison Masih Kosong");
      return false;
    }

    for (var i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == namaPenumpang) {
        this.penumpang[i] == undefined;
        this.kas += bayar;
        return this.penumpang;
      }
    }
  };
}

var bison1 = new Bison("Cak Idris", ["Surabaya", "Sidoarjo"], [], 0);
