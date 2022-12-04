import React from 'react';
import './ourteam.css';
import eye from '../../assets/images/eye.png';
import lineTeam from '../../assets/images/line1.png';
import TeamSlider from '../teamSlider/TeamSlider';
import avatar1 from '../../assets/images/avatar1.png';
import avatar1big from '../../assets/images/avatar1big.png';

const team = [
  {
    name: '@jaypegsonly',
    desc: 'Co-founder / Ecosystem Chief ',
    text: '@jaypegsonly was a corporate finance lawyer at a top global firm who has advised institutional clients, MNCs and VCs. He has worked on deals well over US$1B. Having delved into NFTs since July 2021, he brings his expertise and connections from Web2 into the Web3 world. With all these resources and experience, he aims to build a sustainable, scaleable ecosystem with Dusktopia.',
    img: avatar1,
    imgBig: avatar1big,
  },
  {
    name: '@0xSUPERPOTATO',
    desc: 'Co-founder / Operations Chief',
    text: 'Before crypto, @0xSuperPotato was a commercial lawyer at a top disputes firm. He routinely worked on bet-the-company litigation against governments, mega funds, and multinationals — picking up blue chip experience with complex operational management and problem solving capabilities along the way. Now, he brings that to the Web3 space with Dusktopia.',
    img: avatar1,
    imgBig: avatar1big,
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
