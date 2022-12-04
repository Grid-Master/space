import React from 'react';
import './factionsItem.css';

const FactionsItem = ({ title, image, activeFaction, setActiveFaction }) => {
  return (
    <li className="factions__list-item">
      <h4>{title}</h4>
      <div className="factions__list-item-container">
        <img className="factions__list-item-img" src={image} alt={title} />
        <a className="customButton-container1">
          <button onClick={() => setActiveFaction(1)} className="customButton1">
            More
          </button>
        </a>
      </div>
    </li>
  );
};

export default FactionsItem;
