import React from 'react';
import FactionsItem from '../factionsItem/FactionsItem';
import './factions.css';
import listImg from '../../assets/images/factionImg1.png';

const Factions = () => {
  return (
    <section className="factions">
      <h2>FACTIONS</h2>
      <ul className="factions__list">
        <FactionsItem title={'Blighted Badlands'} image={null} />
        <FactionsItem title={'Glacial Frontier'} image={null} />
        <FactionsItem title={'Sundered Grove'} image={null} />
        <FactionsItem title={'Sky Citadel'} image={null} />
      </ul>
    </section>
  );
};

export default Factions;
