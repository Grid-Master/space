import React, { useState } from 'react';
import Modal from '../../assets/utils/modal/Modal';

const FactionModal = () => {
  const [activeFaction, setActiveFaction] = useState(false);

  return <Modal activeFaction={activeFaction} setActiveFaction={setActiveFaction}></Modal>;
};

export default FactionModal;
