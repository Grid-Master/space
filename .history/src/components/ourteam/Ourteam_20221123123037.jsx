import React from 'react';
import './ourteam.css';
import eye from '../../assets/images/eye.png';

const Ourteam = () => {
  return (
    <section className="ourteam">
      <h2 className="ourteam-title">
        <span>MEMBERS</span>
        <img />
        MEET OUR <img src={eye} className="ourteam-eye" alt="eye" /> TEAM
      </h2>
      <div></div>
    </section>
  );
};

export default Ourteam;
