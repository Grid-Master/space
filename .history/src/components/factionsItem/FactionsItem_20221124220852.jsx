import React, { useState } from 'react';
import './factionsItem.css';

const FactionsItem = ({ title, image }) => {
  const [activeFaction, setActiveFaction] = useState();

  return (
    <li className="factions__list-item">
      <h4>{title}</h4>
      <div className="factions__list-item-container">
        <img className="factions__list-item-img" src={image} alt={title} />
        <a className="customButton-container1">
          <button className="customButton1">More</button>
        </a>
      </div>
    </li>
  );
};

export default FactionsItem;
