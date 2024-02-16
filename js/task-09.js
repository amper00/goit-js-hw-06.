function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyColour = document.querySelector('.change-color');
const spanText   = document.querySelector(`.color`);

const changeBackgroundColor = () => {


const randomColor = getRandomHexColor();
document.body.style.backgroundColor = randomColor;
spanText.textContent = randomColor;

}








bodyColour.addEventListener('click', changeBackgroundColor);









