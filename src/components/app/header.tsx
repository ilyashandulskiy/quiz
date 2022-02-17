import React from 'react';
import { NavLink } from 'react-router-dom';

const logo = require('../../assets/header/header__logo.png');

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <NavLink to="/">
          <img alt="header" src={logo} className="header__logo" />
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
