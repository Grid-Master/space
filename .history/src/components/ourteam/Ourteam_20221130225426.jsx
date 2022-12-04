import React from 'react';
import './ourteam.css';
import eye from '../../assets/images/eye.png';
import lineTeam from '../../assets/images/line1.png';
import TeamSlider from '../teamSlider/TeamSlider';
import bigFade10 from '../../assets/images/bigFade10.png';
import bigFade11 from '../../assets/images/bigFade11.png';
import bigFade12 from '../../assets/images/bigFade12.png';
import black from '../../assets/images/black.png';
import TeamlList from '../teamList/TeamlList';

const Ourteam = () => {
  return (
    <section className="ourteam">
      <h2 className="ourteam-title">
        <span>MEMBERS</span>
        <img src={lineTeam} className="lineTeam" alt="line" />
        MEET <br /> OUR <img src={eye} className="ourteam-eye" alt="eye" /> TEAM
      </h2>

      <TeamSlider />
      <TeamlList />
      <div className="bigFade10"></div>
      <img src={bigFade10} className="bigfade10" alt="fade" />
      <img src={bigFade11} className="bigfade11" alt="fade" />
      <img src={bigFade12} className="bigfade12" alt="fade" />
      <img src={black} className="black" alt="black" />
    </section>
  );
};

export default Ourteam;
