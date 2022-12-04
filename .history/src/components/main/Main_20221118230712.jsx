import React from 'react';
import Header from '../header/Header';
import './main.css';

const Main = () => {
  return (
    <div className="main">
      <Header />
      <h2>FROM DUSK TO DAWN</h2>
      <div>
        <button className="main-button">Mint</button>
        <button className="main-button">Connect Wallet</button>
      </div>
    </div>
  );
};

export default Main;
