import React from 'react';
import './colaborations.css';
import line from '../../assets/images/line1.png';
import star from '../../assets/images/starO.png';
import cbg from '../../assets/images/collaborationsbg.png';

const Colaborations = () => {
  return (
    <div className="colaborations" id="collaborations">
      <h2 className="colaborations-title">
        <span>PARTNERS</span>
        <img src={line} className="line1" alt="line" />
        <img src={star} className="star" alt="star" />
        COLLABORATIONS
      </h2>
      <ul className="colaborations__list">
        <li className="colaborations__list-item">
          LOGO<span className="borderright"></span>
        </li>
        <li className="colaborations__list-item">
          LOGO<span className="borderright"></span>
        </li>
        <li className="colaborations__list-item">
          LOGO<span className="borderright"></span>
        </li>
        <li className="colaborations__list-item">
          LOGO<span className="borderright"></span>
        </li>
      </ul>
      <div className="bigfade9"></div>
      {/* <div className="bigfade8"></div> */}
      <img src={cbg} className="cbg" alt="cbg" />
    </div>
  );
};

export default Colaborations;
