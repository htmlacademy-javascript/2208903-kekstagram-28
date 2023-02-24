const MAX_PHOTOS_NUMBER = 25;
const DESCRIPTION = [
  "Вид на отель",
  "Указатель пляжа",
  "Вид на скалы и море",
  "Девушка в купальнике",
];

const MESSAGES = [
  "Всё отлично!",
  "В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!",
];

const NAMES = ["Александр", "Павел", "Сергей", "Владимир"];
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MAX_COMMENTS = 20;
const MAX_COMMENTS_TOTAL = 5000;
const MAX_AVATAR_NUMBER = 6;

function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createRandomIdFromRangeGenerator(min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= max - min + 1) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

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

createPhotosSet(MAX_PHOTOS_NUMBER);
