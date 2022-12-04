import React from 'react';
import './factionsItem.css';

const FactionsItem = ({ title, image }) => {
  return (
    <li className="factions__list-item">
      <h4>{title}</h4>
      <img className="factions__list-item-img" src={image} alt={title} />
      <a className="factions__list-item-link" href="">
        More
      </a>
    </li>
  );
};

export default FactionsItem;
