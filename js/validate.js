
function validate(evt){
	var login = document.getElementById("login");
	var email = document.getElementById("email");
	var mailHint = document.getElementById("mail-hint");
	var loginHint = document.getElementById("login-hint");
	var empty = !login.value && !email.value;
	var verLogin = /^[\w-]{3,16}$/.test(login.value); // true or false
	var verEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value); // true or false
	
	function togMailHint(errMsg) {
		mailHint.classList.add('notvalid');
		mailHint.innerHTML = errMsg;
		email.onfocus = function() {
			mailHint.classList.remove('notvalid');
			mailHint.innerHTML = 'Правильный формат "name@something.com"';
			loginHint.classList.remove('notvalid');
		};
	}
	
	function togLoginHint(errMsg) {
		loginHint.classList.add('notvalid');
		loginHint.innerHTML = errMsg;
		login.onfocus = function() {
			loginHint.classList.remove('notvalid');
			loginHint.innerHTML = 'Логин должен содержать только латинские '+
			'буквы, цифры а также _ и - (от 3 до 16 символов)';
			mailHint.classList.remove('notvalid');
		};
	}
	
	if (empty) {
		/*alert("Введите данные в одно из полей");*/
		togMailHint('Введите данные в одно из полей');
		togLoginHint('Введите данные в одно из полей');
		return false;
	}
	
	if (!verLogin && !empty && !email.value) {
		/*alert("Логин должен содержать только латинские "+
		"буквы, цифры а также _ и - (от 3 до 16 символов)");*/
		togLoginHint('Неправильный формат логина!');
		return false;
	}
	
	if (!verEmail && !empty && !login.value) {
		/*alert("Неправильный формат Email");*/
		togMailHint('Неправильный формат Email!');
		return false;
	}
	
	if (!verLogin && !verEmail) {
		togLoginHint('Неправильный формат логина!');		
		togMailHint('Неправильный формат Email!');
		return false;
	}
	
	if (verLogin || verEmail) {
		alert("Новый пароль будет отправлен на вашу почту");
		return true;
	}
	
}