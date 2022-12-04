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
        className={activeSlide == id ? null : 'avatar'}
        alt="avatar"
      />
      <p>Co-founder / Operations Chief</p>
      <span>@0xSUPERPOTATO</span>
      {activeSlide == 2 ? (
        <div className="teamSliderElement-info">
          Before crypto, @0xSuperPotato was a commercial lawyer at a top disputes firm. He routinely
          worked on bet-the-company litigation against governments, mega funds, and multinationals —
          picking up blue chip experience with complex operational management and problem solving
          capabilities along the way. Now, he brings that to the Web3 space with Dusktopia.
        </div>
      ) : null}
    </div>
  );
};

export default TeamSliderElement;
