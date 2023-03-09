import { createPhotosSet } from './data.js';
import { MAX_PHOTOS_NUMBER } from './constans.js';
import { makePictures } from './make-picture.js';

const data = createPhotosSet(MAX_PHOTOS_NUMBER);
makePictures(data);
