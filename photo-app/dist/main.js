"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const photo_app_1 = require("./photo-app");
const user = new photo_app_1.User(1, 'nekokami', 'Sofia', true);
const album = new photo_app_1.Album(10, 'Album title');
const picture = new photo_app_1.Picture(1, 'Primera foto', '10-20-2020', photo_app_1.PhotoOrientation.Panorama);
user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);
