const cards = document.querySelectorAll('.card-dashboard');
const texts = document.querySelectorAll('.text');
const values = document.querySelectorAll('.value');

const switchButton = document.querySelector('.switch-button');
const { body } = document;

switchButton.addEventListener('click', () => {
  if (switchButton.querySelector('.checkbox').checked) {
    body.classList.toggle('dark-bg');
    cards.forEach((card) => card.classList.toggle('-dark'));
    texts.forEach((text) => text.classList.toggle('-dark'));
    values.forEach((value) => value.classList.toggle('-dark'));
  }
});
