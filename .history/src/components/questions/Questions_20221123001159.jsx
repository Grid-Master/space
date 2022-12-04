import React from 'react';
import './questions.css';
import lineFAQ from '../../assets/images/line1.png';

const Questions = () => {
  return (
    <section className="questions">
      <h2 className="questions-title">
        <span>FAQ</span>
        <img src={lineFAQ} className="lineFAQ" alt="lineFAQ" />
        HAVE ANY QUESTIONS?
        <img />
      </h2>
      <div></div>
    </section>
  );
};

export default Questions;
