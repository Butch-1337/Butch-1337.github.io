import React from 'react';
import { Link } from 'react-router';

class Navigation extends React.Component {

    constructor() {
        super();
        
        this.state = {
            loggedIn: !!localStorage.acessToken
        };
    }

    clickHandler() {
      localStorage.removeItem('acessToken');
    }

    render() {
        return (
          <nav className="nav">
            <ul>
              <li><Link to="/">Главная</Link></li>
              <li><Link to="/lots">Лоты</Link></li>
              <li>
                  {this.state.loggedIn ?
                    <Link
                        to="/login"
                        onClick={this.clickHandler.bind(this)}>Выход</Link> :
                    <Link to="/login">Вход</Link>
                  }
              </li>
              <li>
                  {this.state.loggedIn ?
                    <Link to="/profile">Профиль</Link> :
                    <Link to="/register">Регистрация</Link>
                  }
              </li>
            </ul>
          </nav>
        );
    }

}


export default Navigation;
