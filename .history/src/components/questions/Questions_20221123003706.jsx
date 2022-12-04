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
      <div className="questions__grid"></div>
    </section>
  );
};

export default Questions;
