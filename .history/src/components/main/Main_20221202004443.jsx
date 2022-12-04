import React from 'react';
import Header from '../header/Header';
import './main.css';
import bigFade6 from '../../assets/images/bigfade6.png';

const Main = ({ activeBurger, setActiveBurger }) => {
  return (
    <div className="main">
      <Header activeBurger={activeBurger} setActiveBurger={setActiveBurger} />
      <h2>FROM DUSK TO DAWN</h2>
      <div>
        <button className="main-button">Mint</button>
        <button className="main-button">Connect Wallet</button>
      </div>
      <img className="bigFade6" src={bigFade6} alt="bigFade6" />
    </div>
  );
};

export default Main;
