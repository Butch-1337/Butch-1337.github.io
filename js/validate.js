'use strict';

var registerForm = document.getElementById("register");
var loginForm = document.getElementById("loginForm");

if (registerForm) {
	registerForm.onsubmit = function() {return validateReg(this);}	
}

if (loginForm) {
	loginForm.onsubmit = function() {return validateLogin(this);}	
}

function togHint(hint, input, errMsg) {
	var normVal = hint.innerHTML;
	hint.classList.add('notvalid');
	hint.innerHTML = errMsg;
	input.onfocus = function() {
		hint.classList.remove('notvalid');
		hint.innerHTML = normVal;
	};
}

function ajaxReq(requestObject, action, modalTxt, anc) {
	var xhr = new XMLHttpRequest();
		
	xhr.open('POST', action);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(JSON.stringify(requestObject));

	xhr.onerror = function() {
		modalPopup(modalTxt, anc, 'Ошибка связи с сервером: ' + xhr.status);	
	}
		
	xhr.onload = function() {
		var response = JSON.parse(xhr.responseText);
	
		if (this.status == 401) {
			modalPopup(modalTxt, anc, 'Окончено время сессии.');
			setTimeout(logOut, 3000);
		}
		
		else if (this.status == 404 &&
		response.errorMessage == "User not found") {
			modalPopup(modalTxt, anc, 'Ошибка авторизации: ' +
			'неправильный логин или пароль');
		}
		
		else if (this.status == 500 &&
		response.errorMessage == "User already exist") {
			modalPopup(modalTxt, anc, 'Пользователь уже существует');	
		}
		
		else if (this.status == 500) {
			modalPopup(modalTxt, anc, 'Ошибка сервера: ' + this.status);
		}
		
		else if (this.status == 200 && !response.isLocked &&
		response.createdDate) {
			modalPopup(modalTxt, anc, 'Вы успешно зарегистрированы и будете '+
			'перенаправлены на страницу авторизации через 3 секунды.');

			setTimeout(redir, 3000, 'login.html');
		}
		
		else if (this.status == 200 && response.access_token) {		
			localStorage.acessToken = response.access_token;
			modalPopup(modalTxt, anc, 'Вы успешно прошли авторизацию и будете '+
			'перенаправлены на страницу профиля через 3 секунды.');

			setTimeout(redir, 3000, 'profile.html');
		};
	}

}

function modalPopup(modalTxt, anc, modalMsg) {
	modalTxt.innerHTML = modalMsg;
	anc.click();
}

function redir(url){window.location.href = url;}

function logOut() {
	if (localStorage.acessToken) delete localStorage.acessToken;	
	redir('login.html');
}

/*----------------------------------------------------------------------*/

function validateReg(formReg){
	
	var anc = document.getElementById("anc");
	var modalTxt = document.getElementById("modalTxt");
	
	var nameInp = formReg.username;
	var loginInp = formReg.login;
	var emailInp = formReg.email;
	var passwordInp = formReg.password;
	var passwordValInp = formReg.passwordVal;
	
	var nameHint = document.getElementById("nameHint");
	var mailHint = document.getElementById("mailHint");
	var loginHint = document.getElementById("loginHint");
	var passwordHint = document.getElementById("passwordHint");
	var passwordValHint = document.getElementById("passwordValHint");

	var verName = /^[А-ЯІЇЄҐа-яіїєґ\s\w][^\d]{6,50}$/.test(nameInp.value);
	var verLogin = /^[\w-@_\.]{3,16}$/.test(loginInp.value);
	var verEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailInp.value);
	var verPassword = /^.{6,18}$/.test(passwordInp.value);
	var verValPassword = /^.{6,18}$/.test(passwordValInp.value);
		
	if (!verName) {
		togHint(nameHint, nameInp, 'Неправильный формат ФИО!');
	}	
		
	if (!verLogin) {
		togHint(loginHint, loginInp, 'Неправильный формат логина!');	
	}
	
	if (!verEmail) {
		togHint(mailHint, emailInp, 'Неправильный формат Email!');	
	}
	
	if (!verPassword) {
		togHint(passwordHint, passwordInp, 'Неправильный формат пароля!');	
	}
	
	if (!verValPassword) {
		togHint(passwordValHint, passwordValInp, 'Неправильный формат пароля!');	
	}
	
	if (passwordInp.value != passwordValInp.value) {
		togHint(passwordValHint, passwordValInp, 'Пароли должны совпадать!');
		togHint(passwordHint, passwordInp, 'Пароли должны совпадать!');
	}
		
	if (verLogin && verEmail && verPassword && verValPassword && 
	(passwordInp.value === passwordValInp.value)) {
		var requestObject = {
			login: loginInp.value,
			email: emailInp.value,
			password: passwordInp.value
		};
		ajaxReq(requestObject, formReg.action, modalTxt, anc);
	
	}
	return false;
}


/*----------------------------------------------------------------------*/
/*----------------------------------------------------------------------*/
/*----------------------------------------------------------------------*/

function validateLogin(formLogin){
	
	var anc = document.getElementById("anc-login");
	var modalTxt = document.getElementById("modalTxt");
	
	var loginInp = formLogin.login;
	var passwordInp = formLogin.password;
	
	var loginHint = document.getElementById("loginHint");
	var passwordHint = document.getElementById("passwordHint");

	var verLogin = /^[\w-@_\.]{3,16}$/.test(loginInp.value);
	var verPassword = /^.{6,18}$/.test(passwordInp.value);
	
		
	if (!verLogin) {
		togHint(loginHint, loginInp, 'Неправильный формат логина!');	
	}
	
	if (!verPassword) {
		togHint(passwordHint, passwordInp, 'Неправильный формат пароля!');	
	}
		
	if (verLogin && verPassword) {
		var requestObject = {
			login: loginInp.value,
			password: passwordInp.value
		};
		ajaxReq(requestObject, formLogin.action, modalTxt, anc);
	
	}
	return false;
}



/*----------------------------------------------------------------------*/
/*----------------------------------------------------------------------*/
/*----------------------------------------------------------------------*/

function validateRestore(formRpwd){
	var loginInp = document.getElementById("login");
	var emailInp = document.getElementById("email");
	
	var mailHint = document.getElementById("mail-hint");
	var loginHint = document.getElementById("login-hint");
	
	var empty = !loginInp.value && !emailInp.value;
	
	var verLogin = /^[\w-]{3,16}$/.test(loginInp.value); // true or false
	var verEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailInp.value); // true or false
	
	if (empty) {
		togHint(mailHint, emailInp, 'Введите данные в одно из полей');
		togHint(loginHint, loginInp, 'Введите данные в одно из полей');
		return false;
	}
	
	if (!verLogin && !empty && !emailInp.value) {
		togHint(loginHint, loginInp, 'Неправильный формат логина!');
		return false;
	}
	
	if (!verEmail && !empty && !loginInp.value) {
		togHint(mailHint, emailInp, 'Неправильный формат Email!');
		return false;
	}
	
	if (!verLogin && !verEmail) {
		togHint(mailHint, emailInp, 'Неправильный формат Email!');
		togHint(loginHint, loginInp, 'Неправильный формат логина!');
		return false;
	}
	
	if (verLogin || verEmail) {
		var requestObject = {
			login: loginInp.value,
			email: emailInp.value,
		};
		
		alert("Новый пароль будет отправлен на ваш Email");	
	}
	return false;
}