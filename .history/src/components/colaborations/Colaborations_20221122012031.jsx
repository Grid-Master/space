import React from 'react';
import './colaborations.css';
import line from '../../assets/images/line1.png';
import star from '../../assets/images/starO.png';
import bigfade8 from '../../assets/images/bigfade8.png';
import bigfade9 from '../../assets/images/bigfade9.png';

const Colaborations = () => {
  return (
    <div className="colaborations">
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
      <img src={bigfade8} className="bigfade8" alt="bigfade8" />
      <div className="bigfade9"></div>
    </div>
  );
};

export default Colaborations;
