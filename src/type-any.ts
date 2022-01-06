let idUser: any; // Tipo explicito
idUser = 1000;
idUser = "1000";
console.log('idUser:', idUser);

let otherId; // Tipo inferido para any
otherId = 20;
otherId = '20';
otherId = true;
console.log('otherId:', otherId);