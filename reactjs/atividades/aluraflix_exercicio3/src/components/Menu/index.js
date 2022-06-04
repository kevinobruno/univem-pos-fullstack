import React from'react';
import Logo from '../../assets/img/Logo.png';
import './menu.css';

const Menu = () => {
  return (
    <nav className='Menu'>
      <a href='/'>
        <img className='Logo' src={Logo} alt="Logo da AluraFlix" />
      </a>
      <a className='ButtonLink' href='/'>Novo vídeo</a>
    </nav>
  );
};

export default Menu;