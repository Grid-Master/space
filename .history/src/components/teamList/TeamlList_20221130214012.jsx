import React from 'react';
import { team } from '../../assets/utils/team';
import './teamList.css';

const TeamlList = () => {
  return (
    <ul className="teamList">
      {team.map((el) => (
        <li className="teamList__item">
          <div className="teamList__item-container">
            <img className="teamList__item-image" />
          </div>
          <p className="teamList__item-info"></p>
        </li>
      ))}
    </ul>
  );
};

export default TeamlList;
