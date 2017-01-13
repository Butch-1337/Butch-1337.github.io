import React, { Component } from 'react';
import Header from './Header';
import ajaxReq from './services/req';
import modalPopup from './services/modalPopup';
import handleClose from './services/handleClose';
import FormField from './forms/FormField';
import Social from './Social';

class Register extends Component {

  constructor() {
    super();
    this.state = {
      valid: [0, 0, 0, 0, 0],
      value: ['', '', '', '', '']
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

    let url = 'https://es-auction.herokuapp.com/api/auth/register';
    let modalTxt = document.getElementById('modalTxt');
    let pwd1 = this.state.value[3];
    let pwd2 = this.state.value[4];

    let isAllValid = this.state.valid.filter((v) => v)
    .length === this.state.valid.length;

    if (isAllValid && (pwd1 === pwd2)) {
      let reqObj = {
        login: this.state.value[1],
        email: this.state.value[2],
        password: this.state.value[3]
      };
      ajaxReq(reqObj, url, modalTxt);
    }
    else {
      console.error('Fields data not valid');
    }

    if (pwd1 !== pwd2) {
      modalPopup(modalTxt, 'Пароли должны совпадать!');
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="box-reg">
          <section className="login register">
            <form
              onSubmit={this.handleSubmit.bind(this)}
              id="register"
              method="post"
              noValidate
            >
              <h1 className="reg-h1">Регистрация</h1>
              <fieldset id="inputsReg">
                <div className="reg-txt"> Введите ФИО:</div>
                <FormField
                  changes={this.handleChange.bind(this, 0)}
                  validationType={"name"}
                  inputId={"username"}
                  type={"text"}
                  placeholder={"ФИО"}
                  hintId={"nameHint"}
                  hintText={'Правильный формат: "Петров Петр Петрович"'}
                  autoFocus={"autoFocus"}
                />
                <div className="reg-txt"> Введите логин:</div>
                <FormField
                  changes={this.handleChange.bind(this, 1)}
                  validationType={"login"}
                  inputId={"login"}
                  type={"text"}
                  placeholder={"Логин"}
                  hintId={"loginHint"}
                  hintText={"Латинские символы (3-16) и цифры а также - @ . _"}
                />
                <div className="reg-txt"> Введите email:</div>
                <FormField
                  changes={this.handleChange.bind(this, 2)}
                  validationType={"email"}
                  inputId={"email"}
                  type={"email"}
                  placeholder={"Email"}
                  hintId={"mailHint"}
                  hintText={'Правильный формат: "name@something.com"'}
                />
                <div className="reg-txt"> Введите пароль:</div>
                <FormField
                  changes={this.handleChange.bind(this, 3)}
                  validationType={"password"}
                  inputId={"password"}
                  type={"password"}
                  placeholder={"Пароль"}
                  hintId={"passwordHint"}
                  hintText={"Любые символы (от 6 до 18)"}
                />
                <div className="reg-txt"> Подтвердите пароль:</div>
                <FormField
                  changes={this.handleChange.bind(this, 4)}
                  validationType={"password"}
                  inputId={"passwordVal"}
                  type={"password"}
                  placeholder={"Пароль"}
                  hintId={"passwordValHint"}
                  hintText={"Любые символы (от 6 до 18)"}
                />
              </fieldset>
              <fieldset>
                <input
                  type="submit"
                  className="submit reg"
                  value="ЗАРЕГИСТРИРОВАТЬСЯ"
                />
              </fieldset>
            </form>
            <section className="social">
              <div className="social-txt"> Или войдите через социальные сети:</div>
              <Social />
            </section>
          </section>
          <a href="#" className="overlay" id="over"></a>
          <div className="popup" id="popup">
            <h3 id="modalTxt">
              
            </h3>
            <a onClick={handleClose} className="close" title="Закрыть" href="#close"></a>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
