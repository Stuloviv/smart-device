import {FocusLock} from './utils/focus-lock';
import {ScrollLock} from './utils/scroll-lock';

const modalContainerElement = document.querySelector('.modal-container');
const headerCallbackElement = document.querySelector('.header__callback-button');
const closeButtonElement = modalContainerElement.querySelector('.modal__close-button');
const modalNameFieldElement = document.getElementById('user-name-modal');

window.focusLock = new FocusLock();
window.scrollLock = new ScrollLock();

const isEscapeDown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    modalContainerElement.classList.add('is-close');
    window.scrollLock.enableScrolling();
    window.focusLock.unlock();
  }
};

const modalClose = () => {
  closeButtonElement.addEventListener('click', () => {
    modalContainerElement.classList.add('is-close');
    window.scrollLock.enableScrolling();
    window.focusLock.unlock();
  });
  modalContainerElement.addEventListener('click', (evt) => {
    if (evt.target.closest('.modal') === null) {
      modalContainerElement.classList.add('is-close');
      window.scrollLock.enableScrolling();
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
    window.scrollLock.disableScrolling();
    modalClose();
  });
}
