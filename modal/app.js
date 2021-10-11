// select modal-btn, modal-overlay, close-btn
// listen for click event on modal-btn and close btn
// when user clicks modal-btn add .OPEN-MODAL to modal-overlay
// when user click close-btn remove .OPEN-MODAL from modal-overlay

const closeBtn = document.querySelector('.close-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const modalBtn = document.querySelector('.modal-btn');

modalBtn.addEventListener('click', function () {
  console.log(modalOverlay.classList);
  modalOverlay.classList.add('open-modal');
});

closeBtn.addEventListener('click', function () {
  modalOverlay.classList.remove('open-modal');
});
