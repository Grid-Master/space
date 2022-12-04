import React from 'react';
import './factions.css';

const Factions = () => {
  return (
    <section className="factions">
      <h2>FACTIONS</h2>
      <ul className="factions__list">
        <li className="factions__list-item">Blighted Badlands</li>
        <li className="factions__list-item">Glacial Frontier</li>
        <li className="factions__list-item">Sundered Grove</li>
        <li className="factions__list-item">Sky Citadel</li>
      </ul>
    </section>
  );
};

export default Factions;
