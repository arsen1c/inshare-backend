const button = document.querySelector('.forgotpass-button');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');

button.addEventListener('click', () => {
	modal.style.display = 'block';
})
closeBtn.addEventListener('click', () => {
	modal.style.display = 'none';
})