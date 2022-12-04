import React from 'react';
import './colaborations.css';
import line from '../../assets/images/line1.png';
import star from '../../assets/images/starO.png';

const Colaborations = () => {
  return (
    <div className="colaborations">
      <h2 className="colaborations-title">
        <span>PARTNERS</span>
        <img src={line} className="line" alt="line" />
        <img src={star} className="star" alt="star" />
        COLLABORATIONS
      </h2>
      <ul className="colaborations__list">
        <li className="colaborations__list-item">LOGO</li>
        <li className="colaborations__list-item">LOGO</li>
        <li className="colaborations__list-item">LOGO</li>
        <li className="colaborations__list-item">LOGO</li>
      </ul>
    </div>
  );
};

export default Colaborations;
