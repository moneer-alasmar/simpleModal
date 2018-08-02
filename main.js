// Get modal element
var modal = document.getElementById('simpleModal');

// Get open modal button
var modalBtn = document.getElementById('modalBtn');

// Get close button
var closeBtn = document.querySelector('.closeBtn');

// Listen for click on modal button
modalBtn.addEventListener('click', openModal);

// Listen for click on close modal button
closeBtn.addEventListener('click', closeModal);

// Listen for click outside modal popup
window.addEventListener('click', clickOutside);

// openModal function
function openModal() {
  modal.style.display = 'block';
}

// closeModal function
function closeModal() {
  modal.style.display = 'none';
}

// clickOutside function
function clickOutside(e) {
  if(e.target == modal) {
    modal.style.display = 'none';
  }
}