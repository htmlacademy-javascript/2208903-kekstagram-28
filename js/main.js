import { getPhotos } from './api.js';
import './form.js';
import { showFilters } from './filters.js';

getPhotos().then((photos) => {
  showFilters(photos);
});
