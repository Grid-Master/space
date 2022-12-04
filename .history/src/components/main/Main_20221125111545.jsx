import React from 'react';
import Button1 from '../../assets/utils/button1/Button1';
import Header from '../header/Header';
import './main.css';
import bigFade6 from '../../assets/images/bigfade6.png';

const Main = () => {
  return (
    <div className="main">
      <Header />
      <h2>FROM DUSK TO DAWN</h2>
      <div>
        <button className="main-button" onClick={() => window.scrollTo(0, 220)}>
          Mint
        </button>
        <button className="main-button">Connect Wallet</button>
      </div>
      <img className="bigFade6" src={bigFade6} alt="bigFade6" />
    </div>
  );
};

export default Main;
