"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
// Funcion para mostrar una fotografia
//function showPicture(picture: {title: string, date: string, orientation: PhotoOrientation}){
function showPicture(picture) {
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
function generatePicture(config) {
    const pic = { title: 'Default', date: '07-01-2022' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
let picture = generatePicture({});
console.log('picture', picture);
picture = generatePicture({ title: 'Travel Pic' });
console.log('picture', picture);
let user;
user = { id: 10, username: 'nekokami', isPro: true };
console.log('user', user);
//user.id = 20; /* Error
console.log('user', user);
