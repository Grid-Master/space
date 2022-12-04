import React from 'react';
import { team } from '../../assets/utils/team';
import './teamList.css';

const TeamlList = () => {
  return (
    <ul className="teamList">
      {team.slice(0, 5).map((el) => (
        <li className="teamList__item">
          <div className="teamList__item-container">
            <img className="teamList__item-image" src={el.imgBig} alt="teamimg" />
            <p className="teamList__item-desc">{el.desc}</p>
            <span className="teamList__item-name">{el.name}</span>
          </div>
          <p className="teamList__item-info">{el.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default TeamlList;
