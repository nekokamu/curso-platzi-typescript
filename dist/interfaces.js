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
