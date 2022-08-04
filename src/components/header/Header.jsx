import React from 'react';
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <NavLink to='/' end >Produtos</NavLink>
      <NavLink to='contact' end >Contato</NavLink>
    </nav>
  );
};

export default Header;