const baseBtn = document.querySelector('#btn-baseline');
const baselineToast = document.querySelector('.toast');
const timer = document.querySelector('.timer');

baseBtn.addEventListener('click', () => {
  baselineToast.style.display = 'flex';
  timer.style.display = 'initial';
});
