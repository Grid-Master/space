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

const Factions = () => {
  const [activeFaction, setActiveFaction] = useState(false);

  return (
    <section className="factions">
      <h2>FACTIONS</h2>
      <ul className="factions__list">
        <FactionsItem
          title={'Blighted Badlands'}
          image={listImg1}
          activeFaction={activeFaction}
          setActiveFaction={setActiveFaction}
        />
        <FactionsItem
          title={'Glacial Frontier'}
          image={listImg2}
          activeFaction={activeFaction}
          setActiveFaction={setActiveFaction}
        />
        <FactionsItem
          title={'Sundered Grove'}
          image={listImg3}
          activeFaction={activeFaction}
          setActiveFaction={setActiveFaction}
        />
        <FactionsItem
          title={'Sky Citadel'}
          image={listImg4}
          activeFaction={activeFaction}
          setActiveFaction={setActiveFaction}
        />
      </ul>
      <img className="bigFade3" src={bigFade3} alt="bigFade3" />
      <img className="bigFade4" src={bigFade4} alt="bigFade4" />
      <img className="bigFade5" src={bigFade5} alt="bigFade5" />
      <Modal active={activeFaction} setActive={setActiveFaction} background="badlands">
        <FactionModal activeFaction={activeFaction} setActiveFaction={setActiveFaction} />
      </Modal>
    </section>
  );
};

export default Factions;
