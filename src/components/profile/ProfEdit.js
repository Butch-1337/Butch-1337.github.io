import React, { Component } from 'react';
/* import { Link } from 'react-router';*/

class ProfEdit extends Component {

  render() {
    return (
      <div>
        <h2>Редактирование профиля </h2>
        <form method="post">
        
        <div className="form-al">
          <div className="field">
            <label htmlFor="f2"> Дата рождения:</label>
            <input id="f2" type="date" name="edit" /> 
          </div>
          <div className="field">
            <label  htmlFor="f3"> Пол: </label>
            <select id="f3"  className="form-control">
              <option>Мужской</option>
              <option>Женский</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="f4"> Введите номер телефона:</label>
            <input id="f4"  type="tel" name="edit" /> 
          </div>
          <div className="field">
            <label htmlFor="f5"> Введите Email:</label>
            <input id="f5"  type="email" name="edit" />
          </div>
          <div className="field">
            <label  htmlFor="f6"> Страна:</label>
            <select id="f6"  className="form-control">
              <option>Украина</option>
              <option>Республика Беларусь</option>
              <option>Польша</option>
              <option>....</option>
            </select> 
          </div>
          <div className="field">
            <label  htmlFor="f7"> Город:</label>
            <select id="f7"  className="form-control">
              <option>Киев</option>
              <option>Львов</option>
              <option>Одесса</option>                     
              <option>Харьков</option>
              <option>Днепропетровск</option>
              <option>....</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="f8"> Район:</label>
            <input id="f8"  type="text" name="edit" />
          </div>
          <div className="field">
            <label htmlFor="f10"> Улица:</label>
            <input id="f10"  type="text" name="edit" />
          </div>
          <div className="field">
            <label  htmlFor="f11"> Защита данных:</label>
            <select id="f11"  className="form-control">
              <option>Использовать HTTPS</option>
              <option>Нет</option>
            </select>
          </div>
          <div className="field">
            <label  htmlFor="f12"> Скрыть почту:</label>
            <select id="f12"  className="form-control">
              <option>Да</option>
              <option>Нет</option>
            </select>
          </div>
          <div className="field">
            <label  htmlFor="f13"> Скрыть номер телефона:</label>
            <select id="f13"  className="form-control">
              <option>Да</option>
              <option>Нет</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="f9"> Сменить пароль:</label>
            <input id="f9"  type="password" name="edit" />
          </div>
          <div className="field">
            <label htmlFor="f14"> Подтвердить смену пароля:</label>
            <input id="f14"  type="password" name="edit" />
          </div>
        </div>
        
        <fieldset id="submit-save">
          <a href="profile" className="nav-lnk">
            <input type="submit" value="Сохранить" className="button" />
          </a>  
        </fieldset>
          
        </form>
      </div>
    );
  }
}

export default ProfEdit;