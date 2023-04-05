import { getPhotos } from './api.js';
import './form.js';
import { showFilters } from './filters.js';
import { showAlert } from './util.js';
import { MESSAGE } from './constans.js';

getPhotos()
  .then((photos) => {
    showFilters(photos);
  })
  .catch(() => {
    showAlert(MESSAGE);
  });
