'use strict';

const modalsBtn = document.querySelectorAll('.show-modal-window');
const modalWindow = document.querySelector('.modal-window');
const closeBtn = document.querySelector('.close-modal-window');

const openModal = (elem, clas) => {
  elem.classList.toggle(clas);
};

const closeModal = (elem, clas) => {
  elem.classList.add(clas);
};

closeBtn.addEventListener('click', () => {
  closeModal(modalWindow, 'hidden');
});

document.addEventListener('keydown', e => {
  if (e.code === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closeModal(modalWindow, 'hidden');
  }
});

modalsBtn.forEach(item => {
  item.addEventListener('click', () => {
    openModal(modalWindow, 'hidden');
  });
});
