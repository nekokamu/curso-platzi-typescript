"use strict";
console.log("Main");
// Number
let numero; // Explicito
numero = 5;
let inferido = 10; // Inferido
let color = 0x00FFC0;
let binario = 0b1010;
let octal = 0o744;
// Boolean
let booleano = true;
let isVisited = false;
// String
let stringcito = "Hola";
let ejemplito = "UwU";
// Template String
// Uso de back-tick `
let userInfo;
userInfo = `
    User Info:
    username: ${ejemplito}
    isVisited: ${isVisited}
    Favorite Color: ${color}
`;
console.log('userInfo', userInfo);
