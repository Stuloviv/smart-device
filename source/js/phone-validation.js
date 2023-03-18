const phoneElements = document.querySelectorAll('input[type="tel"]');
const buttonElements = document.querySelectorAll('button[type="submit"]');

const PHONE_NUMBER_LENGTH_WITH_MASK = 18;

phoneElements.forEach((phoneElement) => {
  phoneElement.addEventListener('keydown', () => {
    if (phoneElement.value.length !== PHONE_NUMBER_LENGTH_WITH_MASK) {
      phoneElement.style.backgroundColor = '#ff9999';
      buttonElements.forEach((button) => {
        button.setAttribute('disabled', 'true');
        button.style.opacity = '0.2';
      });
    } else {
      phoneElement.style.backgroundColor = 'rgba(4,20,39,.15)';
      buttonElements.forEach((button) => {
        button.setAttribute('disabled', 'false');
        button.style.opacity = '1';
      });
    }
  });
});
