import React from 'react';
import FactionsItem from '../factionsItem/FactionsItem';
import './factions.css';
import listImg1 from '../../assets/images/factionImg1.png';
import listImg2 from '../../assets/images/factionImg2.png';
import listImg3 from '../../assets/images/factionImg3.png';
import listImg4 from '../../assets/images/factionImg4.png';

const Factions = () => {
  return (
    <section className="factions">
      <h2>FACTIONS</h2>
      <ul className="factions__list">
        <FactionsItem title={'Blighted Badlands'} image={listImg1} />
        <FactionsItem title={'Glacial Frontier'} image={listImg2} />
        <FactionsItem title={'Sundered Grove'} image={listImg3} />
        <FactionsItem title={'Sky Citadel'} image={listImg4} />
      </ul>
      <img className="bigFade3" src={bigFade3} alt="bigFade3" />
    </section>
  );
};

export default Factions;
