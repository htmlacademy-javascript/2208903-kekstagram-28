import { openModal } from './big-picture.js';

const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const picturesFragment = document.createDocumentFragment();

const makePictures = (photos) => {
  photos.forEach((element) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = element.url;
    pictureElement.querySelector('.picture__comments').textContent =
      element.comments.length;
    pictureElement.querySelector('.picture__likes').textContent = element.likes;
    picturesFragment.append(pictureElement);
    pictureElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      openModal(element);
    });
  });
  pictureContainer.append(picturesFragment);
};

export { makePictures };
