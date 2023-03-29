import { isEscapeKey } from './util.js';
import { COMMENTS_STEP } from './constans.js';

const userModalElement = document.querySelector('.big-picture');
const modalImage = userModalElement.querySelector('.big-picture__img img');
const modalLikes = userModalElement.querySelector('.likes-count');
const modalCommentsCount = userModalElement.querySelector(
  '.social__comment-count'
);
const commentTemplate = userModalElement.querySelector('.social__comment');
const modalCommentsList = userModalElement.querySelector('.social__comments');
const body = document.body;
const modalCloseButton = userModalElement.querySelector('.big-picture__cancel');
const modalDescription = userModalElement.querySelector('.social__caption');
const loaderButton = userModalElement.querySelector('.comments-loader');

const commentsList = [];
let commentsTotal = 0;
let commentsShown = 0;

const hideModal = () => {
  userModalElement.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapeHandler);
};

const showModal = () => {
  userModalElement.classList.remove('hidden');
  body.classList.add('modal-open');
};

modalCloseButton.addEventListener('click', () => {
  hideModal();
});

const renderImage = (element) => {
  modalImage.src = element.url;
};

const renderLikes = (likes) => {
  modalLikes.textContent = likes;
};

const renderCommentsCount = () => {
  modalCommentsCount.innerHTML = ` ${commentsShown} из <span class="comments-count">${commentsTotal}</span> комментариев`;
};

const renderComment = (comment) => {
  const commentTag = commentTemplate.cloneNode(true);
  commentTag.querySelector('.social__picture').src = comment.avatar;
  commentTag.querySelector('.social__picture').alt = comment.name;
  commentTag.querySelector('.social__text').textContent = comment.message;
  commentsShown++;
  return commentTag;
};

const renderButtonLoader = () => {
  if (commentsShown < commentsTotal) {
    loaderButton.classList.remove('hidden');
  } else {
    loaderButton.classList.add('hidden');
  }
};

const renderCommentsList = () => {
  const fragment = document.createDocumentFragment();
  commentsList.splice(0, COMMENTS_STEP).forEach((comment) => {
    fragment.append(renderComment(comment));
  });
  modalCommentsList.append(fragment);
  renderCommentsCount();
  renderButtonLoader();
};

loaderButton.addEventListener('click', () => {
  renderCommentsList();
});

const renderDescription = (description) => {
  modalDescription.textContent = description;
};

const openModal = (photo) => {
  showModal();
  renderImage(photo);
  renderLikes(photo.likes);
  renderDescription(photo.description);
  commentsList.length = 0;
  commentsList.push(...photo.comments.slice());
  modalCommentsList.innerHTML = '';
  commentsTotal = photo.comments.length;
  commentsShown = 0;
  renderCommentsList();
  document.addEventListener('keydown', onEscapeHandler);
};

function onEscapeHandler(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideModal();
  }
}

export { openModal };
