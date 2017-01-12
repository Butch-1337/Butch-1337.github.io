export default function modalPopup(modalTxt, modalMsg) {
	modalTxt.innerHTML = modalMsg;
	const popup = document.querySelector('#popup');
	const over = document.querySelector('#over');
	over.classList.add('show-overlay');
	popup.classList.add('show');
}