const detailedToggle = document.querySelector('.about__button');
const aboutElement = document.querySelector('.about__text-wrapper');

detailedToggle.addEventListener('click', function () {
  if (aboutElement.classList.contains('is-close')) {
    aboutElement.classList.remove('is-close');
    detailedToggle.textContent = 'Свернуть';
  } else {
    aboutElement.classList.add('is-close');
    detailedToggle.textContent = 'Подробнее';
  }
});
