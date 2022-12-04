import React from 'react';
import './factionsItem.css';

const FactionsItem = ({ title, image }) => {
  return (
    <li className="factions__list-item">
      <h4>{title}</h4>
      <img className="factions__list-item-img" src={image} alt={title}>
        <button>More</button>
      </img>
    </li>
  );
};

export default FactionsItem;
