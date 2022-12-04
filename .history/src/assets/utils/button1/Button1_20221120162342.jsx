import React from 'react';

const Button1 = ({ children }) => {
  return (
    <div className="button-container">
      <button className="button">{children}</button>
    </div>
  );
};

export default Button1;
