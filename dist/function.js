"use strict";
// Funcion para crear fotografia
function createPicture(title, date, size) {
    console.log('create picture using', title, date, size);
}
createPicture('Primer ultimo dia de colegio', '01/03/2017', '1000x1000');
// Parametros opcionales
function createPictureOp(title, date, size) {
    console.log('create picture using', title, date, size);
}
//createPicture('Mi cumpleaños'); /* Error
createPictureOp('Mi cumpleaños');
// Flat Array Function
let createPic = (title, date, size) => {
    return {
        title,
        date,
        size
    };
};
const picture = createPic('Dia de hoy', '07-01-2022', '100x100');
console.log('picture', picture);
// Tipo de retorno con TypeScript
function handleError(code, message) {
    if (message == 'error') {
        throw new Error(`${message}. Code error: ${code}`);
    }
    else {
        return 'An error has occurred';
    }
}
try {
    let result = handleError(200, 'OK'); // Retorna string
    console.log('result', result);
    result = handleError(404, 'error'); // Retorna never
    console.log('result', result);
}
catch (error) {
}
