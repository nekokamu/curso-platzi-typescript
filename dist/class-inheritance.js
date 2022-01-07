"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
// Clases abstractas -> Clase demasiado general y queremos evitar crear instancias a partir de la misma
// Super clase
class Item {
    constructor(id, title) {
        this._id = id;
        this._title = title;
    }
    get id() {
        return this._id;
    }
    /*
    set id(id: number){
        this._id = id;
    }
    */
    get title() {
        return this._title;
    }
    set title(title) {
        this._title = title;
    }
}
class Picture extends Item {
    constructor(id, title, orientation) {
        super(id, title); // Constructore de super clase
        //this._id = id;
        //this._title = title;
        this._orientation = orientation;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(o) {
        this._orientation = o;
    }
    toString() {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
    }
}
Picture.photoOrientation = PhotoOrientation;
class Album extends Item {
    constructor(id, title) {
        super(id, title); // Constructor de super clase
        this._pictures = [];
    }
    addPicture(picture) {
        this._pictures.push(picture);
    }
}
const albumcito = new Album(1010, 'Personal Pictures');
const picture = new Picture(10, 'Platzi session', PhotoOrientation.Square);
albumcito.addPicture(picture);
//console.log('Album creado:', albumcito);
//picture.id = 10; // invoca set id(10)
console.log('picture.id', picture.id); // invoca get id()
picture.title = 'Nuevo titulo';
console.log('picture.title', picture.title);
picture.title = 'Nuevo titulo 2';
console.log('picture.title', picture.title);
console.log('album', albumcito);
//const item = new Item(1, 'Test title');
//console.log('item', item);
// Probando el miembro static
//console.log('PhotoOrientation', picture.photoOrientation);
console.log('PhotoOrientation', Picture.photoOrientation.Square);
