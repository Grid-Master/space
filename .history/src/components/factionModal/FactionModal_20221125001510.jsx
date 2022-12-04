import React from 'react';
import './factionModal.css';
import Modal from '../../assets/utils/modal/Modal';
import title from '../../assets/images/factionModal/titleBadlands.png';
import img from '../../assets/images/factionModal/imgBadlands.png';
import background from '../../assets/images/factionModal/bgBadlands.png';

const FactionModal = ({ activeFaction, setActiveFaction }) => {
  return (
    <Modal active={activeFaction} setActive={setActiveFaction}>
      <div className="factionModal__button">
        <button className="factionModal__button-close" onClick={() => setActiveFaction(false)}>
          Close
        </button>
        <button className="factionModal__button-next">Next</button>
      </div>
      <img src={title} className="factionModal-title" alt="title" />
      <ul className="factionModal__info-list">
        <li className="factionModal__info-list-item">Modern-day Dusktopia begins here </li>
        <li className="factionModal__info-list-item">
          The first thing that counts here is survival Only then can you think of profit; then
          finally domination
        </li>
        <li className="factionModal__info-list-item">
          Forge your alliances with the EON Corporation, the rival mafia gangs, or even an utterly
          corrupt police force - and crush all standing in your way
        </li>
      </ul>
      <div>
      <div className="factionModal-locations">
        {[...new Array(8)].map(() => (
          <img className="factionModal-locations-item" src={img} />
        ))}
      </div>
      
    </Modal>
  );
};

export default FactionModal;
