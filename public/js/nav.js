const navBar =  document.querySelector('.navbar');
const toggler = document.querySelector('.toggle');

toggler.addEventListener('click', () => {
	navBar.classList.toggle('block');
})