import React from 'react';
import FactionsItem from '../factionsItem/FactionsItem';
import './factions.css';

const Factions = () => {
  return (
    <section className="factions">
      <h2>FACTIONS</h2>
      <ul className="factions__list">
        <FactionsItem title={'Blighted Badlands'} image={null} />

        <li className="factions__list-item">Glacial Frontier</li>
        <li className="factions__list-item">Sundered Grove</li>
        <li className="factions__list-item">Sky Citadel</li>
      </ul>
    </section>
  );
};

export default Factions;
