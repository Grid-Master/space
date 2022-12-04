import React from 'react';
import Modal from '../../assets/utils/modal/Modal';

const FactionModal = ({ activeFaction, setActiveFaction }) => {
  return (
    <Modal active={activeFaction} setActive={setActiveFaction}>
      <div>
        <button onClick={() => setActiveFaction(false)}>Close</button>
        <button>Next</button>
      </div>
    </Modal>
  );
};

export default FactionModal;
