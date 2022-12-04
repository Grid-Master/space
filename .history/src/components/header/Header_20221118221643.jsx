import React from 'react';
import './header.css';
import backgroundImg from '../../assets/images/mainBackground.png';

const Header = () => {
  return (
    <header className="header">
      <img src={backgroundImg} alt="backgroundImg" />
      <ul>
        <li>
          <a></a>
        </li>
        <li>
          <a></a>
        </li>
        <li>
          <a></a>
        </li>
      </ul>
      <button>Whitepaper</button>
    </header>
  );
};

export default Header;
