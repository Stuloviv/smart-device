const navigationElement = document.querySelector('.footer__site-navigation');
const contactsElement = document.querySelector('.footer__contacts');

navigationElement.classList.remove('no-js');
contactsElement.classList.remove('no-js');

navigationElement.addEventListener('click', function () {
  if (navigationElement.classList.contains('is-close')) {
    navigationElement.classList.toggle('is-close');
    navigationElement.classList.toggle('is-open');
    contactsElement.classList.remove('is-open');
    contactsElement.classList.add('is-close');
  }
});

contactsElement.addEventListener('click', function () {
  if (contactsElement.classList.contains('is-close')) {
    contactsElement.classList.toggle('is-close');
    contactsElement.classList.toggle('is-open');
    navigationElement.classList.remove('is-open');
    navigationElement.classList.add('is-close');
  }
});
