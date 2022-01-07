"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Aserciones de tipo
let username;
username = 'nekokami';
// Tenemos un string, TS confia en mi ;)
let message = username.length > 5 ? `Bienvenido ${username}` : `El nombre de usuario es muy corto`; // Operador ternario
console.log('message:', message);
let usernameWithId = 'nekokami 0506';
// Obtener solo el username
username = usernameWithId.substring(0, 8);
console.log('Username only:', username);
// Sintaxis "as"
message = username.length > 5 ? `Bienvenido ${username}` : `El nombre de usuario es muy corto`;
let helloUser;
helloUser = 'hello nekokami';
username = helloUser.substring(6);
console.log('username', username);
