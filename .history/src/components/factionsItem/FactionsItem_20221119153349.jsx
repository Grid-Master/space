import React from 'react';
import './factionsItem.css';

const FactionsItem = ({ title, image }) => {
  return (
    <li className="factions__list-item">
      {title}
      <img src={image} alt={title} />
    </li>
  );
};

export default FactionsItem;
