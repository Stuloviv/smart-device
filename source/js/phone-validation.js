import {FocusLock} from './utils/focus-lock';

const formElements = document.querySelectorAll('form');

const PHONE_NUMBER_LENGTH_WITH_MASK = 18;

window.focusLock = new FocusLock();

formElements.forEach((formElement) => {
  const phoneElement = formElement.querySelector('input[type="tel"]');
  const buttonElement = formElement.querySelector('button[type="submit"]');
  const textElement = formElement.querySelector('input[type="text"]');

  formElement.addEventListener('input', () => {
    if (textElement.value.length < 3) {
      textElement.style.backgroundColor = '#ff9999';
    } else {
      textElement.style.backgroundColor = 'rgba(4,20,39,.15)';
    }

    if (phoneElement.value.length > 2 && phoneElement.value.length < PHONE_NUMBER_LENGTH_WITH_MASK) {
      phoneElement.style.backgroundColor = '#ff9999';
      buttonElement.style.backgroundColor = 'rgba(4,20,39,0.3)';
    } else {
      phoneElement.style.backgroundColor = 'rgba(4,20,39,.15)';
    }

    if (textElement.value.length < 3 || phoneElement.value.length > 2 && phoneElement.value.length < PHONE_NUMBER_LENGTH_WITH_MASK) {
      buttonElement.style.backgroundColor = 'rgba(4,20,39,0.3)';
    } else {
      buttonElement.style.backgroundColor = 'rgba(4,20,39)';
    }
  });

  formElement.addEventListener('change', () => {
    window.focusLock.lock('.modal', false);
  });

  formElement.addEventListener('submit', (evt) => {
    if (phoneElement.value.length > 2 && phoneElement.value.length !== PHONE_NUMBER_LENGTH_WITH_MASK) {
      evt.preventDefault();
    }
  });
});

