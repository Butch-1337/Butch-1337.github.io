import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router';
import handleClose from './services/handleClose';
import Social from './Social';
import FormField from './forms/FormField';
import ajaxReq from './services/req';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      valid: [0, 0],
      value: ['', '']
    };
  }
  
  handleChange(index, check, inputValue) {
    let valid = this.state.valid;
    let value = this.state.value;
    valid[index] = check;
    value[index] = inputValue;
    
    this.setState({
       valid: valid,
       value: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let url = 'https://es-auction.herokuapp.com/api/auth/login';

    let isAllValid = this.state.valid.filter((v) => v)
    .length === this.state.valid.length;

    if (isAllValid) {
      let reqObj = {
        login: this.state.value[0],
        password: this.state.value[1]
      };
      ajaxReq(reqObj, url, modalTxt);
    }
    else {
      console.error('Fields data not valid');
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="box-login">
          <section className="login">
            <form
              onSubmit={this.handleSubmit.bind(this)}
              id="loginForm"
              method="post"
              noValidate
            >
              <h1 className="login-h1">Авторизация</h1>
              <fieldset id="inputs">
                <div className="login-txt"> Введите логин:</div>
                <FormField
                    changes={this.handleChange.bind(this, 0)}
                    validationType={"login"}
                    inputId={"login"}
                    type={"text"}
                    placeholder={"Логин"}
                    hintId={"loginHint"}
                    hintText={"Латинские символы (3-16) и цифры а также - @ . _"}
                />
                <div className="login-txt"> Введите пароль:</div>
                <FormField
                    changes={this.handleChange.bind(this, 1)}
                    validationType={"password"}
                    inputId={"password"}
                    type={"password"}
                    placeholder={"Пароль"}
                    hintId={"passwordHint"}
                    hintText={"Любые символы (от 6 до 18)"}
                />
              </fieldset>
              <fieldset id="actions" className="actions">
                <input
                  type="submit"
                  className="submit"
                  value="ВОЙТИ"
                />
                <Link to="/restore" className="nav-lnk">
                    Забыли пароль?
                </Link>
                <Link to="/register" className="nav-lnk">
                    Регистрация
                </Link>
              </fieldset>
            </form>
            <section className="social">
              <div className="social-txt"> Или войдите через социальные сети:</div>
              <Social />
            </section>
          </section>
        </div>
        <a href="#" className="overlay" id="over"></a>
        <div className="popup" id="popup">
          <h3 id="modalTxt"></h3>
          <a onClick={handleClose} className="close" title="Закрыть" href="#close"></a>
        </div>
      </div>
    );
  }
}
export default Login;
