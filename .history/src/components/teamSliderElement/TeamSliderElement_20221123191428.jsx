import React from 'react';
import './teamSliderElement.css';
import avatar from '../../assets/images/avatar2.png';
import avatarbig from '../../assets/images/avatar2big.png';

const TeamSliderElement = ({ activeSlide, id }) => {
  return (
    <div
      className={
        activeSlide == id ? 'teamSliderElementActive teamSliderElement' : 'teamSliderElement'
      }>
      <img
        src={activeSlide == id ? avatarbig : avatar}
        className={activeSlide == id ? 'avatarbig' : 'avatar'}
        alt="avatar"
      />
      <p>Co-founder / Operations Chief</p>
      <span>@0xSUPERPOTATO</span>
      {/* {activeSlide == 2 ? <span>2</span> : null} */}
    </div>
  );
};

export default TeamSliderElement;
