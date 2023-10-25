"use strict";

const body = document.querySelector('body');
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const nav = document.querySelector(".nav");
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
  .addEventListener('click', () => cookies.remove());

// for Modal
const ModalOpen = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const ModalCloe = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnsOpenModal.forEach((btn) => btn.addEventListener("click", ModalOpen));
btnCloseModal.addEventListener("click", ModalCloe);
overlay.addEventListener("click", ModalCloe);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    ModalCloe();
  }
});

// for tab
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

tabsContainer.addEventListener("click", (e) => {
  let active = e.target.closest(".operations__tab");
  if(active){
    var date = active.dataset.tab
    tabs.forEach((element) => {
      element.classList.remove("operations__tab--active");
      active.classList.add("operations__tab--active")
    });
    tabsContent.forEach(e=>{e.classList.remove("operations__content--active")})
    tabsContent[date-1].classList.add("operations__content--active")
  }
});

// 'use strict';
// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.btn--close-modal');
// const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// const openModal = function (e) {
//   e.preventDefault();
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };
// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };
// btnsOpenModal.forEach(btnModal =>
//   btnModal.addEventListener('click', openModal)
// );
// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('.hidden')) closeModal();
// });

