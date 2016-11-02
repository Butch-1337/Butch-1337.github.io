
function validate(){
	var login = document.getElementById("login").value;
	var email = document.getElementById("email").value;
	var empty = !login && !email;
	var verLogin = /^[\w-]{3,16}$/.test(login); // true or false
	var verEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/.test(email); // true or false
	
	if (empty) {
		alert("Введите данные в одно из полей");
		return false;
	}
	
	if (!verLogin && !empty && !email) {
		alert("Логин должен сосержать только латинские "+
		"буквы, цифры а также _ и - (от 3 до 16 символов)");
		return false;
	}
	
	if (!verEmail && !empty && !login) {
		alert("Неправильный формат Email");
		return false;
	}
	
	if (verLogin || verEmail) {
		alert("Новый пароль будет отправлен на вашу почту");
		return true;
	}
	
}