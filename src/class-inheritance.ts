export {};

enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}

// Clases abstractas -> Clase demasiado general y queremos evitar crear instancias a partir de la misma

// Super clase
abstract class Item{
    protected readonly _id: number;
    protected _title: string;

    constructor(id: number, title: string){
        this._id = id;
        this._title = title;
    }

    get id(){
        return this._id;
    }
    /*
    set id(id: number){
        this._id = id;
    }
    */
    get title(){
        return this._title;
    }
    set title(title: string){
        this._title = title;
    }
}

class Picture extends Item {
    public static photoOrientation = PhotoOrientation;
    private _orientation: PhotoOrientation;

    public constructor(id: number,
                title: string,
                orientation: PhotoOrientation){
        super(id, title); // Constructore de super clase
        //this._id = id;
        //this._title = title;
        this._orientation = orientation;
    }

    get orientation(){
        return this._orientation;
    }
    set orientation(o: PhotoOrientation){
        this._orientation = o;
    }

    public toString(){
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
    }
}

class Album extends Item {
    private _pictures: Picture[];

    public constructor(id: number, title: string){
        super(id, title); // Constructor de super clase
        this._pictures = [];
    }

    public addPicture(picture: Picture){
        this._pictures.push(picture);
    }
}

const albumcito: Album = new Album(1010, 'Personal Pictures');
const picture: Picture = new Picture(10, 'Platzi session', PhotoOrientation.Square);
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