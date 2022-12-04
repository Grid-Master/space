import React from 'react';
import './ourteam.css';
import eye from '../../assets/images/eye.png';
import lineTeam from '../../assets/images/line1.png';
import TeamSlider from '../teamSlider/TeamSlider';

const team = [
  {
    name: '@jaypegsonly',
    desc: 'Co-founder / Ecosystem Chief ',
    test: '@jaypegsonly was a corporate finance lawyer at a top global firm who has advised institutional clients, MNCs and VCs. He has worked on deals well over US$1B. Having delved into NFTs since July 2021, he brings his expertise and connections from Web2 into the Web3 world. With all these resources and experience, he aims to build a sustainable, scaleable ecosystem with Dusktopia.',
  },
];

const Ourteam = () => {
  return (
    <section className="ourteam">
      <h2 className="ourteam-title">
        <span>MEMBERS</span>
        <img src={lineTeam} className="lineTeam" alt="line" />
        MEET <br /> OUR <img src={eye} className="ourteam-eye" alt="eye" /> TEAM
      </h2>
      <TeamSlider />
    </section>
  );
};

export default Ourteam;
