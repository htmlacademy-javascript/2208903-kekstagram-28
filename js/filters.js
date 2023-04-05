import { makePictures } from './make-picture.js';
import { MAX_RANDOM_PHOTOS } from './constans.js';
import { debounce } from './util.js';
import { RERENDER_DELAY } from './constans.js';

const filterElement = document.querySelector('.img-filters');

const filterPhotos = (criteria, photos) => {
  switch (criteria) {
    case 'filter-default':
      return photos;
    case 'filter-random':
      return [...photos]
        .sort(() => Math.random() - 0.5)
        .slice(0, MAX_RANDOM_PHOTOS);
    case 'filter-discussed':
      return [...photos].sort((a, b) => b.comments.length - a.comments.length);
  }
};

const showFilters = (photos) => {
  filterElement.classList.remove('img-filters--inactive');
  makePictures(photos);
  filterElement.addEventListener(
    'click',
    debounce((evt) => {
      if (evt.target.classList.contains('img-filters__button')) {
        const id = evt.target.id;
        makePictures(filterPhotos(id, photos));
        document
          .querySelector('.img-filters__button--active')
          .classList.remove('img-filters__button--active');
        evt.target.classList.add('img-filters__button--active');
      }
    }, RERENDER_DELAY)
  );
};

export { showFilters };
