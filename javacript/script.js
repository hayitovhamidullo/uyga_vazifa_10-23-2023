'use strict';

// claslar 
const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// openModal modal 
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// closeModal modal 
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btnModal =>
  btnModal.addEventListener('click', openModal)
);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('.hidden')) closeModal();
});

const cookies = document.createElement('div');
cookies.classList.add('cookie-message');
cookies.innerHTML = `
We use cookied for improved functionality and analytics

<button class = 'btn btn--close-cookie'>Got it!<button>
`;
body.prepend(cookies);
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => cookies.remove());
cookies.style.position = 'fixed';
cookies.style.bottom = '0';
cookies.style.background = '#37383d';

cookies.style.height =
  parseFloat(getComputedStyle(cookies).height, 10) + 30 + 'px';

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => cookies.remove() );

  // scrol claslari
  const btnScrollTo = document.querySelector('.btn--scroll-to');
  const sectionl = document.querySelector('#section--1');

  // scrol funksiyasi 
  btnScrollTo.addEventListener('click', (e) => {
    e.preventDefault();
    sectionl.scrollIntoView();
    // console.log(btnScrollTo);
  });

  const colorGenerator = () => {
    return `rgb(
      ${Math.trunc(Math.random() * 256 + 1)},
      ${Math.trunc(Math.random() * 256 + 1)},
      ${Math.trunc(Math.random() * 256 + 1)}
    )`;
  };
  // console.log(colorGenerator);
  
  const navLink = document.querySelector('.nav__links');
  navLink.addEventListener('click', function (e){
    e.preventDefault();
    if(e.target.classList.contains('.nav__links')){
       console.log(e.target);

       const sectionName = e.target.getAttribute('href');
       document.querySelector(sectionName).scrollIntoView({behavior: `smooth`});
    }

  });