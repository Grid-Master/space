import React from 'react';
import avatar from '../../assets/images/avatar1.png';

const TeamSliderElement = () => {
  return (
    <div>
      <img src={avatar} className="avatar" alt="avatar" />
      <p>Co-founder / Operations Chief</p>
      <span>@0xSUPERPOTATO</span>
    </div>
  );
};

export default TeamSliderElement;
