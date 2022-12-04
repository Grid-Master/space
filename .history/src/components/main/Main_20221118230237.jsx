import React from 'react';
import Header from '../header/Header';
import './main.css';

const Main = () => {
  return (
    <div className="main">
      <Header />
      <h2>FROM DUSK TO DAWN</h2>
      <div>
        <button>Mint</button>
        <button>Connect Wallet</button>
      </div>
    </div>
  );
};

export default Main;
