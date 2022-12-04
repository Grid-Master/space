import React from 'react';
import './button1.css';

const Button1 = ({ children }) => {
  return (
    <button className="customButton-container">
      <div className="customButton-border"></div>
      <div className="customButton">{children}</div>
    </button>
  );
};

export default Button1;
