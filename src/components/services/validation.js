import modalPopup from './modalPopup';
import ajaxReq from './req';


export default function (validationType, value) {
	if (validationType === "name") return validateName(value);
	else if (validationType === "login") return validateLogin(value);
	else if (validationType === "email") return validateEmail(value);
	else if (validationType === "password") return validatePwd(value);
}

let validateName = (val) => {
	const nameRE = /^[А-ЯІЇЄҐа-яіїєґ\s\w][^\d]{6,50}$/;
	return (nameRE.test(val));
}

let validateLogin = (val) => {
	const loginRE = /^[\w-@_\.]{3,16}$/;
	return (loginRE.test(val));
}

let validateEmail = (val) => {
	const emailRE = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	return (emailRE.test(val));
}

let validatePwd = (val) => {
	const pwdRE = /^.{6,18}$/;
	return (pwdRE.test(val));
}
