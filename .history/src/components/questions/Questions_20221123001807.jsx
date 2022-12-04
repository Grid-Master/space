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
        HAVE
        <img /> ANY QUESTIONS?
        <img src={sun} className="sun" alt="sun" />
      </h2>
      <div></div>
    </section>
  );
};

export default Questions;
