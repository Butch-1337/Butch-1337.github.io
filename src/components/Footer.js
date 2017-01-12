import React from 'react';

const Footer = () => (
  <footer className="sec footer" id="footer">
    <div className="container">
      <h2 className="title">Контакты</h2>
      <div className="nav-footer">
        <ul>
          <li><a href="https://www.facebook.com">Facebook</a></li>
          <li><a href="https://twitter.com">Twitter</a></li>
          <li><a href="https://plus.google.com">Google+</a></li>
          <li><a href="https://www.linkedin.com">LinkedIn</a></li>
          <li><a href="https://github.com">GitHub</a></li>
        </ul>
      </div>
      <div className="row contact">
        <div className="col-md-6">Email:  
          <a href="mailto:email@smth.com"> email@smth.com</a>
        </div>
        <div className="col-md-6">Телефон: 222-322-222</div>
      </div>
      <div className="row made">
        Made by <a href="https://github.com/Butch-1337">Butch_1337</a>
      </div>
    </div>
  </footer>
);

export default Footer;
