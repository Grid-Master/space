import React from 'react';
import { team } from '../../assets/utils/team';
import './teamList.css';

const TeamlList = () => {
  return (
    <ul className="teamList">
      {team.map((el) => (
        <li className="teamList__item">
          <div className="teamList__item-container">
            <img className="teamList__item-image" src={el.imgBig} alt="teamimg" />
            <p>{el.desc}</p>
            <span>{el.name}</span>
          </div>
          <p className="teamList__item-info">{el.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default TeamlList;
