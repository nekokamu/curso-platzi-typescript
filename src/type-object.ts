// Tipo object
let user: object;
user = {};
user = {
    id: 123,
    username: 'nekokami',
    favoriteColor: '0x00FFC0',
    isGamer: true
};

console.log('user', user);
// Object vs object - ClaseJS vs tipoTS
const myObj = {
    id: 123,
    username: 'nekokami',
    favoriteColor: '0x00FFC0',
    isGamer: true
};

const isInstance = myObj instanceof Object; // Clase Object de JavaScript
console.log('isInstance', isInstance);
console.log('user.username', myObj.username);