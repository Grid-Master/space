import React from 'react';
import './questions.css';
import lineFAQ from '../../assets/images/line1.png';
import sun from '../../assets/images/sun.png';

const Questions = () => {
  return (
    <section className="questions">
      <h2 className="questions-title">
        <span className="FAQ">FAQ</span>
        <img src={lineFAQ} className="lineFAQ" alt="lineFAQ" />
        <span style={{ paddingLeft: '10px' }}>HAVE</span>
        <img src={sun} className="sun" alt="sun" />
        ANY QUESTIONS?
        <img />
      </h2>
      <div className="questions__grid">
        <div className="1"></div>
        <div className="2"></div>
        <div className="3"></div>
        <div className="4"></div>
        <div className="5"></div>
        <div className="6"></div>
        <div className="7"></div>
        <div className="8"></div>
        <div className="9"></div>
        <div className="10"></div>
        <div className="11"></div>
        <div className="12"></div>
        <div className="13"></div>
        <div className="14"></div>
      </div>
    </section>
  );
};

export default Questions;
