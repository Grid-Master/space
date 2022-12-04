import React from 'react';
import './questions.css';
import lineFAQ from '../../assets/images/line1.png';
import sun from '../../assets/images/sun.png';
import zigzag from '../../assets/images/zigzag.png';
import star2 from '../../assets/images/star2.png';

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
        <div className="g1">
          <h4>How many?</h4>
          <p>Our genesis land NFT collection will comprise</p>
          <span>5555 NFTs.</span>
        </div>
        <div className="g2">
          <h4>WHEN mint?</h4>
          <p>
            We are targeting a release<span> in mid May.</span>
          </p>
        </div>
        <div className="g3">
          <h4>Which blockchain?</h4>
          <p>
            Dusktopia will be built on the <span>Ethereum blockchain.</span>
          </p>
        </div>
        <div className="g4">
          <img src={zigzag} className="zigzag" alt="zigzag" />
        </div>
        <div className="g5">5</div>
        <div className="g6">6</div>
        <div className="g7">7</div>
        <div className="g8">8</div>
        <div className="g9">9</div>
        <div className="g10">10</div>
        <div className="g11">11</div>
        <div className="g12">12</div>
        <div className="g13">13</div>
        <div className="g14">14</div>
      </div>
    </section>
  );
};

export default Questions;
