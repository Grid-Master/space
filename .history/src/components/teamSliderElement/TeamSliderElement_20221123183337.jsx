import React from 'react';
import './teamSliderElement.css';
import avatar from '../../assets/images/avatar2.png';

const TeamSliderElement = ({ activeSlide }) => {
  return (
    <div className="teamSliderElement">
      <img src={avatar} className="avatar" alt="avatar" />
      <p>Co-founder / Operations Chief</p>
      <span>@0xSUPERPOTATO</span>
      {activeSlide == 0 ? <span>2</span> : null}
    </div>
  );
};

export default TeamSliderElement;
