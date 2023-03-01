import { createRandomIdFromRangeGenerator, getRandomInteger } from './util.js';
import {
  MAX_PHOTOS_NUMBER,
  DESCRIPTION,
  MESSAGES,
  NAMES,
  MIN_LIKES,
  MAX_LIKES,
  MAX_COMMENTS,
  MAX_COMMENTS_TOTAL,
  MAX_AVATAR_NUMBER,
} from './constans.js';

const generatePhotoId = createRandomIdFromRangeGenerator(1, MAX_PHOTOS_NUMBER);
const generateUrlId = createRandomIdFromRangeGenerator(1, MAX_PHOTOS_NUMBER);
const generateCommentId = createRandomIdFromRangeGenerator(
  1,
  MAX_COMMENTS_TOTAL
);

const createCommentObject = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, MAX_AVATAR_NUMBER)}.svg`,
  message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)],
});

const createComments = (n) => {
  const comments = [];
  for (let i = 1; i <= n; i++) {
    comments.push(createCommentObject());
  }
  return comments;
};

const createPhotoObject = () => ({
  id: generatePhotoId(),
  url: `photos/${generateUrlId()}.jpg`,
  description: DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)],
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments: createComments(getRandomInteger(0, MAX_COMMENTS)),
});

const createPhotosSet = (n) => {
  const photos = [];
  for (let i = 1; i <= n; i++) {
    photos.push(createPhotoObject());
  }
  return photos;
};

export { createPhotosSet };
