import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <h1 className='header__seo-title'>Weather forecast</h1>
      <div className='header__title'>
        <span className='header__title_left-up'>Weather</span>
        <span className='header__title_right-down'>forecast</span>
      </div>
    </header>
  );
};

export default Header;
