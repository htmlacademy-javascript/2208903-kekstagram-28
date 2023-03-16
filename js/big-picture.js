import { isEscapeKey, isEnterKey } from './util.js';

const userModalElement = document.querySelector('.big-picture');
const modalImage = userModalElement.querySelector('.big-picture__img img');
const modalLikes = userModalElement.querySelector('.likes-count');
const modalCommentsCount = userModalElement.querySelector('.comments-count');
const commentTemplate = userModalElement.querySelector('.social__comment');
const modalCommentsList = userModalElement.querySelector('.social__comments');
const body = document.body;
const modalCloseButton = userModalElement.querySelector('.big-picture__cancel');
const modalDescription = userModalElement.querySelector('.social__caption');

const onEscapeHandler = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideModal();
  }
};

const showModal = () => {
  userModalElement.classList.remove('hidden');
  body.classList.add('modal-open');
};

function hideModal() {
  userModalElement.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapeHandler);
}

modalCloseButton.addEventListener('click', () => {
  hideModal();
});

const renderImage = (element) => {
  modalImage.src = element.url;
};

const renderLikes = (likes) => {
  modalLikes.textContent = likes;
};

const renderCommentsCount = (comments) => {
  modalCommentsCount.textContent = comments;
};

const renderComment = (comment) => {
  const commentTag = commentTemplate.cloneNode(true);
  commentTag.querySelector('.social__picture').src = comment.avatar;
  commentTag.querySelector('.social__picture').alt = comment.name;
  commentTag.querySelector('.social__text').textContent = comment.message;
  return commentTag;
};

const renderCommentsList = (comments) => {
  const fragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    fragment.append(renderComment(comment));
  });
  modalCommentsList.innerHTML = '';
  modalCommentsList.append(fragment);
};

const renderDescription = (description) => {
  modalDescription.textContent = description;
};

const openModal = (photo) => {
  showModal();
  renderImage(photo);
  renderLikes(photo.likes);
  renderCommentsCount(photo.comments.length);
  renderCommentsList(photo.comments);
  renderDescription(photo.description);

  document.addEventListener('keydown', onEscapeHandler);
};

export { openModal };
