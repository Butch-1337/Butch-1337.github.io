import React, { Component } from 'react';
import Header from './Header';

class Profile extends Component {

  static onEnter(nextState, replace) {
    const login = window.localStorage.getItem('acessToken');
    if (!login) {
      replace('/login');
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="box-prof">
          <section className="profile container">
            <h2>Ваш профиль</h2>
                    
            <div className="row">
              <div className="col1">
                <div className="pf-col1-wrap">
                  <div className="pf-img-wrap">
                    <img src="./dist/images/anonymous.jpg" alt="ava" />
                  </div>
                </div>
              </div>
              <div className="col2 pf-content">
              
                <div className="tabs">
                  <input id="tab1" type="radio" name="tabs" defaultChecked />
                  <label htmlFor="tab1" title="Вкладка 1">Общая информация</label>
                 
                  <input id="tab2" type="radio" name="tabs" />
                  <label htmlFor="tab2" title="Вкладка 2">Адресс</label>
                 
                  <input id="tab3" type="radio" name="tabs" />
                  <label htmlFor="tab3" title="Вкладка 3">Безопасность</label>
                 
                  <input id="tab4" type="radio" name="tabs" />
                  <label htmlFor="tab4" title="Вкладка 4">Активность</label>
                  
                  <input id="tab5" type="radio" name="tabs" />
                  <label htmlFor="tab5" title="Вкладка 5">История</label>
                 
                  <section className="tab-sn" id="content1">
                    <table>
                      <tbody>
                        <tr>
                          <td>День рождения:</td>
                          <td>27 октября</td>
                        </tr>
                        <tr>
                          <td>Пол:</td>
                          <td>мужской</td>
                        </tr>
                        <tr>
                          <td>Телефон:</td>
                          <td>232-32-323</td>
                        </tr>
                        <tr>
                          <td>Email:</td>
                          <td>anonymous@mail.com</td>
                        </tr>
                      </tbody>
                    </table>
                  </section>
                  <section className="tab-sn" id="content2">
                    <table>
                      <tbody>
                        <tr>
                          <td>Страна:</td>
                          <td>Украина</td>
                        </tr>
                        <tr>
                          <td>Город:</td>
                          <td>Киев</td>
                        </tr>
                        <tr>
                          <td>Район:</td>
                          <td>Печерск</td>
                        </tr>
                        <tr>
                          <td>Улица:</td>
                          <td>Мазепы</td>
                        </tr>
                      </tbody>
                    </table>
                  </section>
                  <section className="tab-sn" id="content3">
                    <table>
                      <tbody className="secure">
                        <tr>
                          <td>Защита данных:</td>
                          <td>Использовать HTTPS</td>
                        </tr>
                        <tr>
                          <td>Скрыть Email:</td>
                          <td>Да</td>
                        </tr>
                        <tr>
                          <td>Скрыть номер телефона:</td>
                          <td>Да</td>
                        </tr>
                      </tbody>
                    </table>
                  </section>
                  <section className="tab-sn" id="content4">
                    <table id="activity">
                      <thead>
                        <tr>
                          <th>Время</th>
                          <th>Событие</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>3/11/2016 [14:50:32]</td>
                          <td>Вход в аккаунт с IP 73.38.200.100</td>
                        </tr>
                        <tr>
                          <td>3/11/2016 [14:45:11]</td>
                          <td>Вход в аккаунт с IP 73.38.200.100</td>
                        </tr>
                        <tr>
                          <td>3/11/2016 [14:30:37]</td>
                          <td>Вход в аккаунт с IP 73.38.200.100</td>
                        </tr>
                        <tr>
                          <td>3/11/2016 [14:20:14]</td>
                          <td>Вход в аккаунт с IP 73.38.200.100</td>
                        </tr>
                        <tr>
                          <td>3/11/2016 [14:15:39]</td>
                          <td>Вход в аккаунт с IP 73.38.200.100</td>
                        </tr>
                      </tbody>
                    </table>
                  </section>
                  <section className="tab-sn" id="content5">
                    <table id="history">
                      <tbody>
                        <tr>
                          <td>Вася</td>
                          <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Aut, blanditiis, sed, error inventore libero maiores ab nisi
                          aliquid officiis enim voluptatibus quisquam sunt dolorem veniam
                          nobis ex earum officia quas.Lorem ipsum dolor sit amet, consectetur
                          adipisicing elit. Cupiditate facere maxime beatae quae quos atque
                          ad blanditiis!
                          </td>
                        </tr>
                        <tr>
                          <td>Петя</td>
                          <td>Ipsa, sed, quis perspiciatis beatae voluptatem vitae pariatur
                          quo iste culpa veniam laboriosam maiores sunt? Velit, tempora nam
                          optio explicabo voluptas eaque.</td>
                        </tr>
                        <tr>
                          <td>Маша</td>
                          <td>Vitae, consequatur sed aliquid blanditiis exercitationem cumque
                          ducimus inventore voluptates nemo ipsum autem dolore omnis repellendus
                          error aut nobis delectus eius magnam.</td>
                        </tr>
                        <tr>
                          <td>Вася</td>
                          <td>Itaque, sed, non, iusto quidem sint neque nam aut doloremque quos
                          eaque adipisci molestias ipsam nobis. Nisi, rerum nesciunt illum
                          corporis hic.</td>
                        </tr>
                        <tr>
                          <td>Вова</td>
                          <td>Labore, accusantium, odio, ipsam officia veniam est voluptate
                          aspernatur quos iusto vero placeat aliquam! Tenetur, consequatur
                          laborum dicta quo in impedit voluptatem.</td>
                        </tr>
                      </tbody>
                    </table>
                  </section>
                </div>
                          
              </div>
            </div>
              
          </section>
        </div>
    
      </div>
    );
  }
}
export default Profile;
