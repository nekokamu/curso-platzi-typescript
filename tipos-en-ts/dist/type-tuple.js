"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tipo tupla
let user;
user = [1, 'nekokami'];
console.log('user:', user);
console.log('username', user[1]);
console.log('username.lenght', user[1].length);
console.log('id', user[0]);
// Para tuplas, idealmente los tipos deben ser diferentes para cada una de las posiciones
// Arreglo de tuplas
let arreglito = [];
arreglito.push([1, 'nekokami']);
arreglito.push([2, 'nekokami__']);
arreglito.push([3, 'nekokamixd']);
console.log('arreglito:', arreglito);
// Usar funciones de arreglos
arreglito[2][1] = arreglito[2][1].concat('_');
console.log('arreglito:', arreglito);
