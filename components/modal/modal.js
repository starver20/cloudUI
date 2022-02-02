const modalBtn = document.querySelector('.btn');

const backdrop = document.querySelector('.modal-backdrop');
const modal = document.querySelector('.modal');

const acceptBtn = document.querySelector('#accept');
const declineBtn = document.querySelector('#decline');

modalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
  backdrop.style.display = 'block';
});

acceptBtn.addEventListener('click', () => close());

declineBtn.addEventListener('click', () => close());

backdrop.addEventListener('click', () => close());

let close = () => {
  modal.style.display = 'none';
  backdrop.style.display = 'none';
};
