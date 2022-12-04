import React from 'react';
import './modal.css';

const Modal = ({ active, setActive }) => {
  return (
    <div className="modal" onClick={() => setActive(false)}>
      <div className="modal__content"></div>
    </div>
  );
};

export default Modal;
