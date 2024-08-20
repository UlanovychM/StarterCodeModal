'use strict';

const modalsBtn = document.querySelectorAll('.show-modal-window');

modalsBtn.forEach(item => {
  item.addEventListener('click', () => {
    document.querySelector('.modal-window').classList.toggle('hidden');
  });
});
