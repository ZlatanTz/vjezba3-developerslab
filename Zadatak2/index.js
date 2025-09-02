import { bankOne, bankTwo } from './data.js';

const buttons = document.querySelector('.buttons-section');
const soundName = document.querySelector('.sound-name');
const slider = document.querySelector('.slider');

let dataOne = [...bankOne];
dataOne.map((bank) => {
  let buttonElement = document.createElement('button');
  buttonElement.classList.add('button');
  buttonElement.innerHTML = bank.keyTrigger;
  let audio = new Audio(bank.url);
  buttonElement.addEventListener('click', () => {
    audio.play();
    soundName.innerHTML = bank.id;
  });
  buttons.appendChild(buttonElement);
});

slider.addEventListener('input', (e) => {
  audio.volume(e.value);
});
