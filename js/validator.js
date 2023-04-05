import { checkLengthString } from './util.js';
import { MAX_PHOTO_DESCRIPTION } from './constans.js';
import { MAX_HASHTAG_NUMBER, HASHTAG_SYMBOLS } from './constans.js';

const orderForm = document.querySelector('.img-upload__form');
const hashtagField = document.querySelector('.text__hashtags');
const descriptionField = document.querySelector('.text__description');

const pristine = new Pristine(
  orderForm,
  {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextTag: 'p',
    errorTextClass: 'form__error',
  },
  false
);

const validateDescription = (value) =>
  checkLengthString(value, MAX_PHOTO_DESCRIPTION);

pristine.addValidator(
  descriptionField,
  validateDescription,
  `Длина комментария не должна превышать ${MAX_PHOTO_DESCRIPTION} символов`
);

const isValidTag = (tag) => HASHTAG_SYMBOLS.test(tag);

const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_NUMBER;

const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const validateHashtags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};

pristine.addValidator(
  hashtagField,
  validateHashtags,
  'Неправильно заполнено поле с хэштегами'
);

const validateForm = () => pristine.validate();

export { validateForm };
