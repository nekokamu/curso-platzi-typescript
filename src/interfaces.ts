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