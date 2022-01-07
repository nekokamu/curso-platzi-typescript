export {};

enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface Picture {
    title: string,
    date: string,
    orientation: PhotoOrientation
}

// Funcion para mostrar una fotografia
//function showPicture(picture: {title: string, date: string, orientation: PhotoOrientation}){
function showPicture(picture: Picture){
    console.log(`
        [title: ${picture.title},
        date: ${picture.date},
        orientation: ${picture.orientation}]`);
}
let myPic = {
    title: 'Test title',
    date: '07-01-2022',
    orientation: PhotoOrientation.Landscape
};
showPicture(myPic);
showPicture({
    title: 'Test 2 title',
    date: '08-01-2022',
    orientation: PhotoOrientation.Landscape
});

// Propiedades opcionales en interfaces

interface PictureConfig{
    title?: string
    date?: string,
    orientation?: PhotoOrientation
}

function generatePicture(config: PictureConfig){
    const pic = {title: 'Default', date: '07-01-2022'};
    if (config.title){
        pic.title = config.title;
    }
    if (config.date){
        pic.date = config.date;
    }
    return pic;
}

let picture = generatePicture({});
console.log('picture', picture);
picture = generatePicture({title: 'Travel Pic'});
console.log('picture', picture);

// Read only
interface User{
    readonly id: number;
    username: string;
    isPro: boolean;
}

let user: User;
user = {id: 10, username: 'nekokami', isPro: true};
console.log('user', user);
//user.id = 20; /* Error
console.log('user', user);