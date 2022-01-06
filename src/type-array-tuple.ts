// Tipo array

// Explicito
let users: string[];
users = ['nekokami', 'nekokamu', 'nekokamixd', 'nekokami__'];
//users = [1, true, 'test']; /* Error

// Inferido
let otherUsers = ['nekokami', 'nekokamu', 'nekokamixd', 'nekokami__'];

// Array<TIPO>
let usernames: Array<string>
usernames = ['nekokami', 'nekokamu', 'nekokamixd', 'nekokami__']

// Acceso a los valores de un array
console.log('firs user:', users[0]);
console.log('second username:', usernames[1]);

// Propiedades en arrays
console.log('users.lenght:', users.length);

// Uso de metodos en arrays
users.push('nekokamilikeasir');
users.sort();
console.log('users:', users);