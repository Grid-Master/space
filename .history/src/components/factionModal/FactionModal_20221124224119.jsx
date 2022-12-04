import React from 'react';
import Modal from '../../assets/utils/modal/Modal';

const FactionModal = ({ activeFaction, setActiveFaction }) => {
  return (
    <Modal activeFaction={activeFaction} setActiveFaction={setActiveFaction}>
      <button onClick={() => setActiveFaction(false)}>back</button>
    </Modal>
  );
};

export default FactionModal;
