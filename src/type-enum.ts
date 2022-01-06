const a = 0;
const b = 1;
const c = 2;
const d = 3;

enum Letras {
    a,
    b,
    c,
    d
}

const letra_a: Letras = Letras.a;
console.log('a:', a);

enum NumerosDesdeEl10 {
    diez = 10,
    once,
    doce,
    trece,
    catorce,
    quince
}

const once: NumerosDesdeEl10 = NumerosDesdeEl10.once;
console.log('once:', once);