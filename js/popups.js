import { isEscapeKey } from './util.js';

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

const onEscapeHandler = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    successPopupCloseHandler();
    errorPopupCloseHandler();
  }
};

const successHandler = () => {
  document.body.append(successPopup);
  successPopup.addEventListener('click', successPopupCloseHandler);
  document.addEventListener('keydown', onEscapeHandler);
};

const failHandler = () => {
  document.body.append(errorPopup);
  errorPopup.addEventListener('click', errorPopupCloseHandler);
  document.addEventListener('keydown', onEscapeHandler);
};

export { successHandler, failHandler };