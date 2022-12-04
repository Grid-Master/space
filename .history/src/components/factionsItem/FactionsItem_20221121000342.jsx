import React from 'react';
import './factionsItem.css';

const FactionsItem = ({ title, image }) => {
  return (
    <li className="factions__list-item">
      <h4>{title}</h4>
      <div className="factions__list-item-container">
        <img className="factions__list-item-img" src={image} alt={title} />
        <div className="customButton-container">
          <button className="customButton">{More}</button>
        </div>
      </div>
    </li>
  );
};

export default FactionsItem;
