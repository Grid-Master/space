import React from 'react';
import Header from '../header/Header';
import './main.css';
import bigFade6 from '../../assets/images/bigfade6.png';

const Main = () => {
  return (
    <div className="main">
      <Header />
      <h2>FROM DUSK TO DAWN</h2>
      <div>
        <button className="main-button" onClick={() => window.scrollBy(0, window.innerHeight)}>
          Mint
        </button>
        <button className="main-button" onClick={() => window.scrollBy(2 * window.innerHeight)}>
          Connect Wallet
        </button>
      </div>
      <img className="bigFade6" src={bigFade6} alt="bigFade6" />
    </div>
  );
};

export default Main;
