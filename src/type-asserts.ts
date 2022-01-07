export {};

// Aserciones de tipo
let username: any;
username = 'nekokami';

// Tenemos un string, TS confia en mi ;)
let message: string = (<string>username).length > 5 ? `Bienvenido ${username}` : `El nombre de usuario es muy corto` // Operador ternario
console.log('message:', message);

let usernameWithId: any = 'nekokami 0506';
// Obtener solo el username
username = (<string>usernameWithId).substring(0, 8);
console.log('Username only:', username);

// Sintaxis "as"
message = (username as string).length > 5 ? `Bienvenido ${username}` : `El nombre de usuario es muy corto`

let helloUser: any;
helloUser = 'hello nekokami';
username = (helloUser as string).substring(6);
console.log('username', username);