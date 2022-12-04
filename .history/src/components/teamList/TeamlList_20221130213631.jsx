import React from 'react';
import './teamList.css';

const TeamlList = () => {
  return (
    <ul className="teamList">
      <li className="teamList__item">
        <div className="teamList__item-container">
          <img className="teamList__item-image" />
        </div>
        <p className="teamList__item-info"></p>
      </li>
    </ul>
  );
};

export default TeamlList;
