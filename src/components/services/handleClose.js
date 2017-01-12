export default (e) => {
	e.preventDefault();
    const popup = e.target.parentNode;
    const over = document.querySelector('.show-overlay');
    popup.classList.remove('show');
    over.classList.remove('show-overlay');
}
