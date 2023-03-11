const modalContainerElement = document.querySelector('.modal-container');
const headerCallbackElement = document.querySelector('.header__callback-button');
const closeButtonElement = modalContainerElement.querySelector('.modal__close-button');
const modalNameFieldElement = modalContainerElement.querySelector('.callback-form__field--name-modal');
const pageElement = document.querySelector('.page');


const isEscapeDown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    modalContainerElement.classList.add('is-close');
    pageElement.style.overflow = 'scroll';
  }
};

const modalClose = () => {
  closeButtonElement.addEventListener('click', () => {
    modalContainerElement.classList.add('is-close');
    pageElement.style.overflow = 'scroll';
  });
  document.addEventListener('keydown', isEscapeDown);
  modalContainerElement.addEventListener('click', (evt) => {
    if (evt.target.closest('.modal') === null) {
      modalContainerElement.classList.add('is-close');
      pageElement.style.overflow = 'scroll';
    }
  });
};

if (modalContainerElement.classList.contains('is-close')) {
  headerCallbackElement.addEventListener('click', function () {
    modalContainerElement.classList.remove('is-close');
    modalNameFieldElement.focus();
    pageElement.style.overflow = 'hidden';
    modalClose();
  });
}
