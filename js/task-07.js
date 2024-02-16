const slider = document.querySelector('#font-size-control');
const span = document.querySelector('#text')


slider.addEventListener('input', () =>{


const fontSize = slider.value + 'px';
span.style.fontSize  = fontSize;




})