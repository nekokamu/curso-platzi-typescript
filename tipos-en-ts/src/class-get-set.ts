export {};

enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture{
    private _id: number;
    private _title: string;
    private _orientation: PhotoOrientation;

    public constructor(id: number,
                title: string,
                orientation: PhotoOrientation){
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }

    get id(){
        return this._id;
    }
    set id(id: number){
        this._id = id;
    }
    get title(){
        return this._title;
    }
    set title(title: string){
        this._title = title;
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

class Album{
    private _id: number;
    private _title: string;
    private _pictures: Picture[];

    public constructor(id: number, title: string){
        this._id = id;
        this._title = title;
        this._pictures = [];
    }

    get id(){
        return this._id;
    }
    set id(id: number){
        this._id = id;
    }
    get title(){
        return this._title;
    }
    set title(t: string){
        this._title = t;
    }

    public addPicture(picture: Picture){
        this._pictures.push(picture);
    }
}

const albumcito: Album = new Album(1010, 'Personal Pictures');
const picture: Picture = new Picture(10, 'Platzi session', PhotoOrientation.Square);
albumcito.addPicture(picture);

console.log('Album creado:', albumcito);

picture.id = 100;
picture.title = 'Nuevo titulo';

picture.id = 10; // invoca set id(10)
console.log('picture.id', picture.id); // invoca get id()

console.log('album', albumcito);