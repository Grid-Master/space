import React, { useState } from 'react';
import FactionsItem from '../factionsItem/FactionsItem';
import './factions.css';
import listImg1 from '../../assets/images/factionImg1.png';
import listImg2 from '../../assets/images/factionImg2.png';
import listImg3 from '../../assets/images/factionImg3.png';
import listImg4 from '../../assets/images/factionImg4.png';
import bigFade3 from '../../assets/images/bigfade3.png';
import bigFade4 from '../../assets/images/bigfade4.png';
import bigFade5 from '../../assets/images/bigfade5.png';
import Modal from '../../assets/utils/modal/Modal';
import FactionModal from '../factionModal/FactionModal';
import { factionLocations } from '../../assets/utils/factionLocations';

const factions = [
  {
    title: 'Blighted Badlands',
    image: listImg1,
    factionName: 'badlands',
    factionId: 0,
  },
  {
    title: 'Glacial Frontier',
    image: listImg2,
    factionName: 'glacial',
    factionId: 1,
  },
  {
    title: 'Sundered Grove',
    image: listImg3,
    factionName: 'sundered',
    factionId: 2,
  },
  {
    title: 'Sky Citadel',
    image: listImg4,
    factionName: 'skycitadel',
    factionId: 3,
  },
];

const Factions = () => {
  const [activeFaction, setActiveFaction] = useState({
    isActiveFaction: false,
    factionName: null,
    factionId: 0,
  });

  return (
    <section className="factions">
      <h2>FACTIONS</h2>
      {/* <ul className="factions__list">
        {factions.map((faction) => (
          <FactionsItem setActiveFaction={setActiveFaction} {...faction} />
        ))}
      </ul> */}
      <Modal
        active={activeFaction}
        setActive={setActiveFaction}
        background={activeFaction.factionName}>
        <FactionModal
          activeFaction={activeFaction}
          setActiveFaction={setActiveFaction}
          {...factionLocations[activeFaction.factionId]}
        />
      </Modal>
      {/* <img className="bigFade3" src={bigFade3} alt="bigFade3" /> */}
      {/* <img className="bigFade4" src={bigFade4} alt="bigFade4" /> */}
      <img className="bigFade5" src={bigFade5} alt="bigFade5" />
    </section>
  );
};

export default Factions;
