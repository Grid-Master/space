import React from 'react';
import './button1.css';

const Button1 = ({ children }) => {
  return (
    <div className="customButton-container">
      {/* <div className="customButton-border"></div> */}
      <button className="customButton">{children}</button>
    </div>
  );
};

export default Button1;
