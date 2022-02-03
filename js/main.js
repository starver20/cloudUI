// Modal Elements

// Toast Elements
const baseBtn = document.getElementById('btn-baseline');
const baselineToast = document.getElementById('toast');
// const timer = document.getElementById('timer');

const modalBtn = document.getElementById('btn-modal');
const backdrop = document.querySelector('.modal-backdrop');
const modal = document.querySelector('.modal');
const acceptBtn = document.getElementById('accept');
const declineBtn = document.getElementById('decline');

baseBtn.addEventListener('click', () => {
  baselineToast.style.display = 'flex';
  // timer.style.display = 'initial';

  setTimeout(() => {
    baselineToast.style.display = 'none';
    // timer.style.display = 'none';
  }, 4000);
});

// Modal Logic
modalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
  backdrop.style.display = 'block';
});

console.log('Modal Test');
acceptBtn.addEventListener('click', () => close());

declineBtn.addEventListener('click', () => close());

backdrop.addEventListener('click', () => close());

let close = () => {
  modal.style.display = 'none';
  backdrop.style.display = 'none';
};

console.log('Amar');
