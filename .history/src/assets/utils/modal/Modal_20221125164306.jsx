import React from 'react';
import './modal.css';

const Modal = ({ active, setActive, children, background }) => {
  return (
    <div className={active ? 'modal active' : 'modal'}>
      <div className="modal__content" onClick={(e) => e.stopPropatination()}>
        {children}
        <div className="modal__content-background"></div>
      </div>
    </div>
  );
};

export default Modal;
