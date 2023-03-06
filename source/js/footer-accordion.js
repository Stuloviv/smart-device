const navigationElement = document.querySelector('.footer__site-navigation');
const navigationToggle = navigationElement.querySelector('.footer__site-navigation-toggle');
const contactsElement = document.querySelector('.footer__contacts');
const contactsToggle = contactsElement.querySelector('.footer__contacts-toggle');

navigationElement.classList.remove('no-js');
contactsElement.classList.remove('no-js');

navigationToggle.addEventListener('click', function () {
  if (navigationElement.classList.contains('is-close')) {
    navigationElement.classList.remove('is-close');
    navigationElement.classList.add('is-open');
    contactsElement.classList.remove('is-open');
    contactsElement.classList.add('is-close');

  } else {
    navigationElement.classList.add('is-close');
    navigationElement.classList.remove('is-open');
  }
});

contactsToggle.addEventListener('click', function () {
  if (contactsElement.classList.contains('is-close')) {
    contactsElement.classList.remove('is-close');
    contactsElement.classList.add('is-open');
    navigationElement.classList.remove('is-open');
    navigationElement.classList.add('is-close');

  } else {
    contactsElement.classList.add('is-close');
    contactsElement.classList.remove('is-open');
  }
});
