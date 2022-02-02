const baseBtn = document.querySelector('#btn-baseline');
const baselineToast = document.querySelector('.toast');

baseBtn.addEventListener('click', () => {
  baselineToast.style.display = 'flex';

  setTimeout(() => {
    baselineToast.style.display = 'none';
  }, 4000);
});
