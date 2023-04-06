import { isEscapeKey } from './util.js';
import { escapeHandler } from './form.js';
const successTemplate = document
  .querySelector('#success')
  .content.querySelector('.success');
const successPopup = successTemplate.cloneNode(true);

const errorTemplate = document
  .querySelector('#error')
  .content.querySelector('.error');
const errorPopup = errorTemplate.cloneNode(true);

const successPopupCloseHandler = () => {
  document.querySelector('.success').remove();
  successPopup.removeEventListener('click', successPopupCloseHandler);
};

const errorPopupCloseHandler = () => {
  document.querySelector('.error').remove();
  errorPopup.removeEventListener('click', errorPopupCloseHandler);
};

const errorEscapeHandler = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    errorPopupCloseHandler();
    document.addEventListener('keydown', escapeHandler);
    document.removeEventListener('keydown', errorEscapeHandler);
  }
};

const successEscapeHandler = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    successPopupCloseHandler();
  }
};

const successHandler = () => {
  document.body.append(successPopup);
  successPopup.addEventListener('click', successPopupCloseHandler);
  document.addEventListener('keydown', successEscapeHandler);
};

const failHandler = () => {
  document.body.append(errorPopup);
  errorPopup.addEventListener('click', errorPopupCloseHandler);
  document.addEventListener('keydown', errorEscapeHandler);
};

export { successHandler, failHandler };
