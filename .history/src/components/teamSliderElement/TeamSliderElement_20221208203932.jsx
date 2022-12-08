import React from 'react';
import './teamSliderElement.css';

const TeamSliderElement = ({ activeSlide,  id, name, desc img, imgBig }) => {
  return (
    <div
      className={
        activeSlide == id ? 'teamSliderElementActive teamSliderElement' : 'teamSliderElement'
      }>
      <div className="teamSliderElement-container">
        <img src={activeSlide == id ? imgBig : img} className="avatar" alt="avatar" />
        <p>{desc}</p>
        <span>{name}</span>
      </div>
    </div>
  );
};

export default TeamSliderElement;
