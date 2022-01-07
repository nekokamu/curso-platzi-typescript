export {};

enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface Entity{
    id: number;
    title: string;
}

interface Album extends Entity{
    description: string;
}

interface Picture extends Entity{
    orientation: PhotoOrientation;
}

const album: Album = {
    id: 1010,
    title: 'ABCD',
    description: 'Las primeras cuatro letras del abecedario.'
};

const picture: Picture = {
    id: 1011,
    title: 'EFGH',
    orientation: PhotoOrientation.Landscape
};

let newPicture = {} as Picture;
newPicture.id = 2;
newPicture.title = 'Moon';

console.log('album', album);
console.log('picture', picture);
console.log('newpicture', newPicture);