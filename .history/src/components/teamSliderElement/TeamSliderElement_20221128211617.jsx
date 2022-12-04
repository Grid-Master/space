import React from 'react';
import './teamSliderElement.css';

const TeamSliderElement = ({ activeSlide, setActiveSlide, id, name, desc, text, img, imgBig }) => {
  return (
    <>
      <div
        // onClick={() => setActiveSlide(id)}
        className={
          activeSlide == id ? 'teamSliderElementActive teamSliderElement' : 'teamSliderElement'
        }>
        <div className="teamSliderElement-container">
          <img src={activeSlide == id ? imgBig : img} className="avatar" alt="avatar" />
          <p>{desc}</p>
          <span>{name}</span>
          {/* {activeSlide == id ? (
        <div
          // className={
          //   activeSlide == id
          //     ? 'teamSliderElement-info teamSliderElement-info-visible'
          //     : 'teamSliderElement-info'
          // }
          className="teamSliderElement-info">
          {text}
        </div>
        
      ) : null} */}
          {/* <div
          // className={
          //   activeSlide == id
          //     ? 'teamSliderElement-info teamSliderElement-info-visible'
          //     : 'teamSliderElement-info'
          // }
          className="teamSliderElement-info">
          {text}
        </div> */}
        </div>
      </div>
      {<div className="teamSliderElement-info">{text}</div>}
    </>
  );
};

export default TeamSliderElement;
