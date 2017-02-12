//показать окно входа
function showlogin() {
	document.getElementsByClassName('modal-login')[0].style.display = 'block';
}

//скрыть окно входа
function closeloginwindow() {
	document.getElementsByClassName('modal-login')[0].style.display = 'none';
}

//показать карту
function showmap() {
	document.getElementsByClassName('modal-map-popup')[0].style.display = 'block';
}

//скрыть карту
function hidemap() {
	document.getElementsByClassName('modal-map-popup')[0].style.display = 'none';
}