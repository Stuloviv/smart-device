import {FocusLock} from './utils/focus-lock';

const modalContainerElement = document.querySelector('.modal-container');
const headerCallbackElement = document.querySelector('.header__callback-button');
const closeButtonElement = modalContainerElement.querySelector('.modal__close-button');
const modalNameFieldElement = modalContainerElement.querySelector('.callback-form__field--name-modal');
const pageElement = document.body;

window.focusLock = new FocusLock();

const isEscapeDown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    modalContainerElement.classList.add('is-close');
    pageElement.style.overflow = 'scroll';
    window.focusLock.unlock();
  }
};

const modalClose = () => {
  closeButtonElement.addEventListener('click', () => {
    modalContainerElement.classList.add('is-close');
    pageElement.style.overflow = 'scroll';
    window.focusLock.unlock();
  });
  modalContainerElement.addEventListener('click', (evt) => {
    if (evt.target.closest('.modal') === null) {
      modalContainerElement.classList.add('is-close');
      pageElement.style.overflow = 'scroll';
    }
    window.focusLock.unlock();
  });
  document.addEventListener('keydown', isEscapeDown);
};

if (modalContainerElement.classList.contains('is-close')) {
  headerCallbackElement.addEventListener('click', () => {
    modalContainerElement.classList.remove('is-close');
    window.focusLock.lock('.modal');
    modalNameFieldElement.focus();
    pageElement.style.overflow = 'hidden';
    modalClose();
  });
}
