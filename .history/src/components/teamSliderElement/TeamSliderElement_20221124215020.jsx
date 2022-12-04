import React from 'react';
import './teamSliderElement.css';

const TeamSliderElement = ({ activeSlide, setActiveSlide, id, name, desc, text, img, imgBig }) => {
  return (
    <div
      onClick={() => setActiveSlide(id)}
      style={{ width: '100px' }}
      className={
        activeSlide == id ? 'teamSliderElementActive teamSliderElement' : 'teamSliderElement'
      }>
      <img
        src={activeSlide == id ? imgBig : img}
        className={activeSlide == id ? null : 'avatar'}
        alt="avatar"
      />
      <p>{desc}</p>
      <span>{name}</span>
      {activeSlide == id ? (
        <div
          className={
            activeSlide == id
              ? 'teamSliderElement-info teamSliderElement-info-visible'
              : 'teamSliderElement-info'
          }>
          {text}
        </div>
      ) : null}
    </div>
  );
};

export default TeamSliderElement;
