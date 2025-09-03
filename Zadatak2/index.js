import { bankOne, bankTwo } from './data.js';

const buttons = document.querySelector('.buttons-wrapper');
const soundName = document.querySelector('.sound-name');
const slider = document.querySelector('.slider');

let currentBank = bankOne;

const audio = new Audio();

let isPowerOn = true;

let volume = 0.5;
slider.addEventListener('input', (e) => {
  volume = e.target.value;
  renderBtnBad(currentBank, volume, isPowerOn)  
});

const renderBtnBad = (currBank, vol, isPowerOn) => {
  buttons.innerHTML = "";

  currBank.forEach((bank) => {
    let buttonElement = document.createElement('button');
    buttonElement.classList.add('button');
    buttonElement.innerHTML = bank.keyTrigger;

    buttonElement.addEventListener('click', () => {
      audio.src = bank.url;
      audio.volume = vol;
      soundName.innerHTML = bank.id;
      if (isPowerOn) audio.play();
    });
    buttons.appendChild(buttonElement);
  });
}

// initial render
renderBtnBad(currentBank, volume, isPowerOn);

// Power swtich
const powerSwitcher = document.getElementById("power-switcher");
powerSwitcher.classList.toggle("active");
const powerSwitcherBtn = document.getElementById("power-switcher-btn");
powerSwitcherBtn.addEventListener('click', () => {
  powerSwitcher.classList.toggle("active");
  isPowerOn = !isPowerOn;
  renderBtnBad(currentBank, volume, isPowerOn);
});

// Bank swtich
const bankSwitcher = document.getElementById("bank-switcher");
const bankSwitcherBtn = document.getElementById("bank-swticher-btn");
bankSwitcherBtn.addEventListener('click', () => {
  bankSwitcher.classList.toggle("active");
  if (currentBank === bankOne) {
    currentBank = bankTwo;
  } else if (currentBank === bankTwo) {
    currentBank = bankOne;
  } else {
    currentBank = bankOne;
  }
  renderBtnBad(currentBank, volume, isPowerOn)
  
})





