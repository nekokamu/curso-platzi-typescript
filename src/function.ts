// Funcion para crear fotografia

/*
function prueba(title, date, size){
    // Aquí los parametros son de tipo any, por lo que no podemos usar los metodos de los tipos que necesitamos
    console.log(title, date, size);
}
*/

type SquareSize = '100x100' | '500x500' | '1000x1000'

function createPicture(title: string, date: string, size: SquareSize){
    console.log('create picture using', title, date, size);
}

createPicture('Primer ultimo dia de colegio', '01/03/2017', '1000x1000');

// Parametros opcionales
function createPictureOp(title?: string, date?: string, size?: SquareSize){
    console.log('create picture using', title, date, size);
}
//createPicture('Mi cumpleaños'); /* Error
createPictureOp('Mi cumpleaños');

// Flat Array Function
let createPic = (title: string, date: string, size: SquareSize): object => {
    return {
        title,
        date,
        size
    };
};

const picture = createPic('Dia de hoy', '07-01-2022', '100x100');
console.log('picture', picture);