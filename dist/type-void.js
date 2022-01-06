"use strict";
// Tipo explicito
function showInfo(user) {
    console.log('User Info', user.id, user.username, user.favoriteColor);
}
showInfo({ id: 1, username: 'nekokami', favoriteColor: '0x00FFC0' });
// Tipo inferido
function showFormattedInfo(user) {
    console.log('User Info', `
        id: ${user.id}
        username: ${user.username}
        Color Favorito ${user.favoriteColor}
    `);
}
showFormattedInfo({ id: 1, username: 'nekokami', favoriteColor: '0x00FFC0' });
// Tipo void como tipo de dato
let unusable;
//unusable = null; /* Se puede quitar este error al asignar false a "strict" en tsconfig.json
//unusable = undefined;
// Tipo never
function handleError(code, message) {
    // Codigo
    throw new Error(`${message}. Code: ${code}`);
}
try {
    handleError(404, 'not found');
}
catch (error) {
}
function sumNumbers(limit) {
    let suma = 0;
    while (true) {
        suma++;
    }
}
sumNumbers(10);
