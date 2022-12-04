import React from 'react';
import './modal.css';

const Modal = ({ active, setActive, children, background }) => {
  return (
    <div className={active.isActiveFaction ? 'modal active' : 'modal'}>
      <div className={`modal__content modal__${background}`} onClick={(e) => e.stopPropatination()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
