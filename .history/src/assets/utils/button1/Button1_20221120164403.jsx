import React from 'react';
import './button1.css';

const Button1 = ({ children }) => {
  return (
    <button className="customButton-container">
      <div className="customButton-border"></div>
      <button className="customButton">{children}</button>
    </button>
  );
};

export default Button1;
