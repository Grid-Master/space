import React from 'react';
import './ourteam.css';
import eye from '../../assets/images/eye.png';
import lineTeam from '../../assets/images/line1.png';
import TeamSlider from '../teamSlider/TeamSlider';

const Ourteam = () => {
  return (
    <section className="ourteam">
      <h2 className="ourteam-title">
        <span>MEMBERS</span>
        <img src={lineTeam} className="lineTeam" alt="line" />
        MEET <br /> OUR <img src={eye} className="ourteam-eye" alt="eye" /> TEAM
      </h2>
      <TeamSlider />
      <div className="bigFade10"></div>
    </section>
  );
};

export default Ourteam;
