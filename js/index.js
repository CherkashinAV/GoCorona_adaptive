const burgerEl = document.querySelector('.burger');
const menu = document.querySelector('.menu');
if (burgerEl) {
	burgerEl.addEventListener('click', () => {
		burgerEl.classList.toggle('active');
		menu.classList.toggle('active')
	})
}
