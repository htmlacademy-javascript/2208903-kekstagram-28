import { GET_DATA_URL, POST_DATA_URL } from './constans.js';

const getPhotos = () =>
  fetch(GET_DATA_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .catch(() => {
      throw new Error();
    });

const postPhoto = (body, successHandler, failHandler) => {
  fetch(POST_DATA_URL, {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        successHandler();
      } else {
        failHandler();
      }
    })
    .catch(() => {
      failHandler();
    });
};

export { getPhotos, postPhoto };
