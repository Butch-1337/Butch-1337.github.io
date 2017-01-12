import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router';

const Header = () => (
  <header className="header shadow">
    <div id="head-top" className="container header-top clearfix">
      <Link className="logo" to="/">
        <img src="../dist/images/au-logo.png" alt="Logo" />
      </Link>
      <Navigation className="" />
    </div>
  </header>
);

export default Header;
