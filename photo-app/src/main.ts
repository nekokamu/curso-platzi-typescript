import {Album, PhotoOrientation, Picture, User} from './photo-app'

const user = new User(1, 'nekokami', 'Sofia', true);
const album = new Album(10, 'Album title');
const picture = new Picture(1, 'Primera foto', '10-20-2020', PhotoOrientation.Panorama);

user.addAlbum(album);
album.addPicture(picture);

console.log('user', user);