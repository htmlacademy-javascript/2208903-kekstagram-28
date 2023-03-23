import { validateForm } from './validator.js';

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
};

closeButton.addEventListener('click', () => {
  modalUploadHide();
});

imageUpload.addEventListener('change', () => {
  modalUploadShow();
  const fileImage = imageUpload.files[0];
  imagePreview.src = URL.createObjectURL(fileImage);
});

orderForm.addEventListener('submit', (evt) => {
  validateForm();
  if (!validateForm()) {
    evt.preventDefault();
  }
});
