import React from 'react';
import Button1 from '../../assets/utils/button1/Button1';
import './factionsItem.css';

const FactionsItem = ({ title, image }) => {
  return (
    <li className="factions__list-item">
      <h4>{title}</h4>
      <div className="factions__list-item-container">
        <img className="factions__list-item-img" src={image} alt={title} />
        <Button1>More</Button1>
      </div>
    </li>
  );
};

export default FactionsItem;
