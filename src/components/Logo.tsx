import React from 'react';
import { Link as NavLink } from 'react-router-dom';
import logo from 'img/logo.svg';

const Logo = () => {
  return (
    <NavLink to="/">
      <img srcSet={logo} alt="logo" height="80px" width="260px" />
    </NavLink>
  );
};

export default Logo;
