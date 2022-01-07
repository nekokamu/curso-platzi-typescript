export {};

enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture{
    id: number;
    title: string;
    orientation: PhotoOrientation;

    constructor(id: number,
                title: string,
                orientation: PhotoOrientation){
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }

    toString(){
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
    }
}

class Album{
    id: number;
    title: string;
    pictures: Picture[];

    constructor(id: number, title: string){
        this.id = id;
        this.title = title;
        this.pictures = [];
    }

    addPicture(picture: Picture){
        this.pictures.push(picture);
    }
}

const albumcito: Album = new Album(1010, 'Personal Pictures');
const picture: Picture = new Picture(10, 'Platzi session', PhotoOrientation.Square);
albumcito.addPicture(picture);

console.log('Album creado:', albumcito);