const MAX_PHOTOS_NUMBER = 25;

const COMMENTS_STEP = 5;
const MAX_PHOTO_DESCRIPTION = 140;
const MAX_HASHTAG_NUMBER = 5;
const HASHTAG_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_RANDOM_PHOTOS = 10;
const RERENDER_DELAY = 500;

const GET_DATA_URL = 'https://28.javascript.pages.academy/kekstagram/data';
const POST_DATA_URL = 'https://28.javascript.pages.academy/kekstagram';

export {
  MAX_PHOTOS_NUMBER,
  COMMENTS_STEP,
  MAX_PHOTO_DESCRIPTION,
  MAX_HASHTAG_NUMBER,
  HASHTAG_SYMBOLS,
  MAX_RANDOM_PHOTOS,
  RERENDER_DELAY,
  GET_DATA_URL,
  POST_DATA_URL,
};
