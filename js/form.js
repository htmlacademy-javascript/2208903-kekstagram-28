import { validateForm } from './validator.js';
import { scale } from './scale.js';
import { effects } from './effects.js';
import { postPhoto } from './api.js';
import { successHandler, failHandler } from './popups.js';
import { isEscapeKey } from './util.js';

const imageUpload = document.querySelector('.img-upload__input');
const modalUpload = document.querySelector('.img-upload__overlay');
const imagePreview = document.querySelector('.img-upload__preview img');
const orderForm = document.querySelector('.img-upload__form');
const body = document.body;
const closeButton = document.querySelector('.img-upload__cancel');

const modalUploadShow = () => {
  modalUpload.classList.remove('hidden');
  body.classList.add('modal-open');
};

const modalUploadHide = () => {
  modalUpload.classList.add('hidden');
  body.classList.remove('modal-open');
  orderForm.reset();
  document.removeEventListener('keydown', escapeHandler);
};

closeButton.addEventListener('click', () => {
  modalUploadHide();
});

const modalOpen = () => {
  modalUploadShow();
  scale();
  effects();
  document.addEventListener('keydown', escapeHandler);
};

imageUpload.addEventListener('change', () => {
  modalOpen();
  const fileImage = imageUpload.files[0];
  imagePreview.src = URL.createObjectURL(fileImage);
});

const submitButton = document.querySelector('.img-upload__submit');

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...',
};

orderForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (validateForm()) {
    submitButton.textContent = SubmitButtonText.SENDING;
    submitButton.disabled = true;
    postPhoto(new FormData(evt.target))
      .then((response) => {
        if (response.ok) {
          modalUploadHide();
          successHandler();
        } else {
          failHandler();
          document.removeEventListener('keydown', escapeHandler);
        }
      })
      .catch(() => {
        failHandler();
        document.removeEventListener('keydown', escapeHandler);
      })
      .finally(() => {
        submitButton.textContent = SubmitButtonText.IDLE;
        submitButton.disabled = false;
      });
  }
});

function escapeHandler(evt) {
  const inputFocus =
    evt.target.classList.contains('text__hashtags') ||
    evt.target.classList.contains('text__description');
  if (inputFocus) {
    return false;
  }
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    modalUploadHide();
  }
}

export { escapeHandler };
