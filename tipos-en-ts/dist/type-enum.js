"use strict";
const a = 0;
const b = 1;
const c = 2;
const d = 3;
var Letras;
(function (Letras) {
    Letras[Letras["a"] = 0] = "a";
    Letras[Letras["b"] = 1] = "b";
    Letras[Letras["c"] = 2] = "c";
    Letras[Letras["d"] = 3] = "d";
})(Letras || (Letras = {}));
const letra_a = Letras.a;
console.log('a:', a);
var NumerosDesdeEl10;
(function (NumerosDesdeEl10) {
    NumerosDesdeEl10[NumerosDesdeEl10["diez"] = 10] = "diez";
    NumerosDesdeEl10[NumerosDesdeEl10["once"] = 11] = "once";
    NumerosDesdeEl10[NumerosDesdeEl10["doce"] = 12] = "doce";
    NumerosDesdeEl10[NumerosDesdeEl10["trece"] = 13] = "trece";
    NumerosDesdeEl10[NumerosDesdeEl10["catorce"] = 14] = "catorce";
    NumerosDesdeEl10[NumerosDesdeEl10["quince"] = 15] = "quince";
})(NumerosDesdeEl10 || (NumerosDesdeEl10 = {}));
const once = NumerosDesdeEl10.once;
console.log('once:', once);
