import React from 'react';
import './ourteam.css';
import eye from '../../assets/images/eye.png';
import lineTeam from '../../assets/images/line1.png';

const Ourteam = () => {
  return (
    <section className="ourteam">
      <h2 className="ourteam-title">
        <span>MEMBERS</span>
        <img src={lineTeam} className="lineTeam" alt="line" />
        MEET OUR <img src={eye} className="ourteam-eye" alt="eye" /> TEAM
      </h2>
      <div></div>
    </section>
  );
};

export default Ourteam;
