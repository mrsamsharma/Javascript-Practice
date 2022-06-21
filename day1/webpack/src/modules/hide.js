import btn from './btnElement.js';

export default () => {
  btn.addEventListener('click', () => {
  document.getElementById('main').style.display = 'none';
  btn.style.display = 'none';
});
}