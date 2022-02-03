const baseBtn = document.getElementById('btn-baseline');
const baselineToast = document.getElementById('toast');
const timer = document.getElementById('timer');

const backdrop = document.querySelector('.modal-backdrop');
const modalBtn = document.getElementById('btn-modal');
const modal = document.querySelector('.modal');
const acceptBtn = document.getElementById('accept');
const declineBtn = document.getElementById('decline');

// Toast Logic
if (baseBtn !== null) {
  baseBtn.addEventListener('click', () => {
    baselineToast.style.display = 'flex';
    timer.style.display = 'initial';

    setTimeout(() => {
      baselineToast.style.display = 'none';
      timer.style.display = 'none';
    }, 4000);
  });
}

// Modal Logic
if (modalBtn !== null) {
  modalBtn.addEventListener('click', () => {
    console.log('Inside Modal');
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
}
