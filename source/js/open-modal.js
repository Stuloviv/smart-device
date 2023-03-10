const modalContainerElement = document.querySelector('.modal-container');
const headerCallbackElement = document.querySelector('.header__callback-button');
const closeButtonElement = modalContainerElement.querySelector('.modal__close-button');
const modalNameFieldElement = modalContainerElement.querySelector('.callback-form__field--name-modal');

if (modalContainerElement.classList.contains('is-close')) {
  headerCallbackElement.addEventListener('click', function () {
    modalContainerElement.classList.remove('is-close');
    modalNameFieldElement.focus();
    closeButtonElement.addEventListener('click', function () {
      modalContainerElement.classList.add('is-close');
    });
  });
}
