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
};

const onEscapeHandler = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    modalUploadHide();
  }
};

closeButton.addEventListener('click', () => {
  modalUploadHide();
});

const modalOpen = () => {
  modalUploadShow();
  scale();
  effects();
  document.addEventListener('keydown', onEscapeHandler);
};

imageUpload.addEventListener('change', () => {
  modalOpen();
  const fileImage = imageUpload.files[0];
  imagePreview.src = URL.createObjectURL(fileImage);
});

const submitButton = document.querySelector('.img-upload__submit');

const SubmitButtonText = {
  IDLE: 'Сохранить',
  SENDING: 'Сохраняю...',
};

orderForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (validateForm()) {
    submitButton.textContent = SubmitButtonText.SENDING;
    submitButton.disabled = true;
    postPhoto(new FormData(evt.target), successHandler, failHandler).then(
      () => {
        submitButton.textContent = SubmitButtonText.IDLE;
        submitButton.disabled = false;
      }
    );
  }
});
