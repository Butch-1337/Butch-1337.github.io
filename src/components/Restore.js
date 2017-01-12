import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router';
import validate from './services/validation';
import handleClose from './services/handleClose';
import FormField from './forms/FormField';
import ajaxReq from './services/req';

class Restore extends Component {
  
  constructor() {
    super();
    this.state = {
      valid: [0],
      value: ['']
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
    let url = 'https://es-auction.herokuapp.com/api/auth/restorePassword';

    let isAllValid = this.state.valid.filter((v) => v)
    .length === this.state.valid.length;

    if (isAllValid) {
      let reqObj = {
        email: this.state.value[0]
      };
      ajaxReq(reqObj, url, modalTxt);
    }
    else {
      console.error('Field data not valid');
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="box-restore">
          <section id="restore" className="login restore">
            <form
              onSubmit={this.handleSubmit.bind(this)}
              id="restore-pwd"
              method="post"
              noValidate
            >
              <h1 className="restore-h1">Восстановление пароля</h1>
              <fieldset id="inputs">
                <div className="restore-txt"> Введите email:</div>
                <FormField
                  changes={this.handleChange.bind(this, 0)}
                  validationType={"email"}    
                  inputId={"email"}
                  type={"email"}
                  placeholder={"Email"}
                  hintId={"mailHint"}
                  hintText={'Правильный формат: "name@something.com"'}
                  autoFocus={"autoFocus"}
                />
              </fieldset>
              <fieldset id="actions" className="actions">
                  <input
                    id="send"
                    type="submit"
                    className="submit send"
                    value="ОТПРАВИТЬ ПАРОЛЬ"
                  />
                
                <Link to="/login" className="nav-lnk">
                  Вернуться к авторизации
                </Link>
              </fieldset>
            </form>
            
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
export default Restore;
