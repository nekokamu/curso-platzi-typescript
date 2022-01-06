console.log("Main");

// Number
let numero: number; // Explicito
numero = 5;
let inferido = 10; // Inferido

let color: number = 0x00FFC0
let binario: number = 0b1010;
let octal: number = 0o744;

// Boolean
let booleano: boolean = true;
let isVisited = false;

// String
let stringcito: string = "Hola";
let ejemplito = "UwU";

// Template String
// Uso de back-tick `
let userInfo: string;
userInfo = `
    User Info:
    username: ${ejemplito}
    isVisited: ${isVisited}
    Favorite Color: ${color}
`;

console.log('userInfo', userInfo);