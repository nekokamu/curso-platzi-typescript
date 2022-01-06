export {};

// Tipo union
let idUser: number | string;
idUser = 10;
idUser = '10';

function getUsernameById(id: number | string){
    return 'nekokami';
}

getUsernameById(5);
getUsernameById('5');

// Alias de tipos
type Codigo = number | string;
type username = string;

let codigoUsuario: Codigo;
function funcioncita(codigoUsuario: Codigo){
    return 'a';
}

// Tipos literales
type SquareSize = '100x100' | '500x500' | '1000x1000';
//let smallPicture: SquareSize = '200x200'; /* Error
let smallPicture: SquareSize = '100x100';
console.log(smallPicture);