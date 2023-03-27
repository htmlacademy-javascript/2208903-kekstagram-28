import { getPhotos } from './api.js';
// import { MAX_PHOTOS_NUMBER } from './constans.js';
import { makePictures } from './make-picture.js';
import './form.js';

getPhotos().then((photos) => {
  makePictures(photos);
});
