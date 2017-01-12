import modalPopup from './modalPopup';
import { browserHistory } from 'react-router';

export default function ajaxReq(requestObject, action, modalTxt) {
	var xhr = new XMLHttpRequest();
		
	xhr.open('POST', action);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(JSON.stringify(requestObject));
	xhr.onerror = function() {
		modalPopup(modalTxt, 'Ошибка связи с сервером: ' + xhr.status);	
	}
		
	xhr.onload = function() {

        try {
		  var response = JSON.parse(xhr.responseText);
        }

        catch(err){
          throw(err.name + ': ' + err.message);
        }

		if (this.status == 401) {
			modalPopup(modalTxt, 'Выход из профиля.');
			setTimeout(logOut, 3000);
		}
		
		else if (this.status == 404 &&
		response.errorMessage == 'User not found') {
			modalPopup(modalTxt, 'Ошибка авторизации: ' +
			'пользователь не найден');
		}
		
		else if (this.status == 500 &&
		response.errorMessage == 'User already exist') {
			modalPopup(modalTxt, 'Пользователь уже существует');	
		}
		
		else if (this.status == 500) {
			modalPopup(modalTxt, 'Ошибка сервера: ' + this.status);
		}
		
		else if (this.status == 200 && !response.isLocked &&
		response.createdDate) {
			modalPopup(modalTxt, 'Вы успешно зарегистрированы и будете '+
			'перенаправлены на страницу авторизации через 3 секунды.');
			setTimeout(browserHistory.push, 3000, 'login');
		}
		
		else if (this.status == 200 && response.access_token) {		
			localStorage.acessToken = response.access_token;
			modalPopup(modalTxt, 'Вы успешно прошли авторизацию и будете '+
			'перенаправлены на страницу профиля через 3 секунды.');
			setTimeout(browserHistory.push, 3000, 'profile');
		}

		else if (this.status == 200 &&
		response.message == 'New password was sent on email') {		
			localStorage.acessToken = response.access_token;
			modalPopup(modalTxt, 'Новый пароль отправлен на ваш Email');
		}
	}

}

function logOut() {
	if (localStorage.acessToken) delete localStorage.acessToken;	
	browserHistory.push('/login');
}