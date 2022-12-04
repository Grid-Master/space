import React from 'react';

const Button1 = ({ children }) => {
  return (
    <div className="customButton-container">
      <button className="customButton">{children}</button>
    </div>
  );
};

export default Button1;
