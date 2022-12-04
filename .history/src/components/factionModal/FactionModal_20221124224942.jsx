import React from 'react';
import Modal from '../../assets/utils/modal/Modal';

const FactionModal = ({ activeFaction, setActiveFaction }) => {
  return (
    <Modal active={activeFaction} setActive={setActiveFaction}>
      <div>
        <button onClick={() => setActiveFaction(false)}>Close</button>
        <button>Next</button>
      </div>
      <img />
      <ul>
        <li>Modern-day Dusktopia begins here </li>
        <li>
          The first thing that counts here is survival Only then can you think of profit; then
          finally domination
        </li>
        <li>
          Forge your alliances with the EON Corporation, the rival mafia gangs, or even an utterly
          corrupt police force - and crush all standing in your way
        </li>
      </ul>
      <div></div>
    </Modal>
  );
};

export default FactionModal;
