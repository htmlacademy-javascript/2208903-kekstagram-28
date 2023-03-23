const plusButton = document.querySelector('.scale__control--bigger');
const minusButton = document.querySelector('.scale__control--smaller');
const controlValue = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview img');

const scaleModel = {
  scale: 100,
  step: 25,
  max: 100,
  min: 25,
};

const resetScaleModel = () => {
  scaleModel.scale = 100;
};

const renderScaleValue = () => {
  controlValue.value = `${scaleModel.scale}%`;
};

const renderScaleImage = () => {
  image.style.transform = `scale(${scaleModel.scale * 0.01})`;
};

const decreaseScale = () => {
  if (scaleModel.scale - scaleModel.step >= scaleModel.min) {
    scaleModel.scale -= scaleModel.step;
    renderScaleValue();
    renderScaleImage();
  }
};

const increaseScale = () => {
  if (scaleModel.scale + scaleModel.step <= scaleModel.max) {
    scaleModel.scale += scaleModel.step;
    renderScaleValue();
    renderScaleImage();
  }
};

plusButton.addEventListener('click', increaseScale);
minusButton.addEventListener('click', decreaseScale);

const scale = () => {
  resetScaleModel();
  renderScaleValue();
  renderScaleImage();
};

export { scale };
