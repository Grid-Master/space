import React from 'react';
import './teamSliderElement.css';

const TeamSliderElement = ({ activeSlide, setActiveSlide, id, name, desc, text, img, imgBig }) => {
  return (
    <div
      // onClick={() => setActiveSlide(id)}
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
