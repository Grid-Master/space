import React from 'react';
import './teamSliderElement.css';
import avatar from '../../assets/images/avatar2.png';
import avatarbig from '../../assets/images/avatar2big.png';

const TeamSliderElement = ({ activeSlide, setActiveSlide, id, name, desc, text, img, imgBig }) => {
  return (
    <div
      onClick={() => setActiveSlide(id)}
      className={
        activeSlide == id ? 'teamSliderElementActive teamSliderElement' : 'teamSliderElement'
      }>
      <img
        src={activeSlide == id ? avatarbig : avatar}
        className={activeSlide == id ? null : 'avatar'}
        alt="avatar"
      />
      <p>{desc}</p>
      <span>{name}</span>
      {activeSlide == id ? <div className="teamSliderElement-info">{text}</div> : null}
    </div>
  );
};

export default TeamSliderElement;
