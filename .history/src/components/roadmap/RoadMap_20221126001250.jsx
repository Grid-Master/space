import React, { useState } from 'react';
import './roadMap.css';
import arrows from '../../assets/images/arrows.png';
import line from '../../assets/images/line1.png';
import bigFade2 from '../../assets/images/bigfade2.png';
import bigFade7 from '../../assets/images/bigfade7.png';
import background1 from '../../assets/images/roadmapbg.png';
import background5 from '../../assets/images/roadmapBG2.png';
import background4 from '../../assets/images/roadmapBG3.png';
import background3 from '../../assets/images/roadmapBG4.png';
import background2 from '../../assets/images/roadmapBG5.png';

const RoadMap = () => {
  const [road, setRoad] = useState(1);

  return (
    <section className="roadMap">
      <h2 className="roadMap__title">
        <span onClick={() => window.scrollTo(0, 0)}>OUR WAY</span>
        <img className="line" src={line} alt="line" />
        ROAD <img src={arrows} alt="arrows" /> MAP
      </h2>
      <ul className="roadMap__list">
        <li className="roadMap__list-item" onClick={() => setRoad(1)}>
          <div className="div-container">
            <h3>01</h3>
            <h4>GENESIS LANDS DROP</h4>
            <p>
              An original collection of 5,555 land plots will be made ready for the very first
              Dusktopian adventurers.
            </p>
            <span className="borderrightroadmap"></span>
            <div className={`fade1-${road}`}></div>
          </div>
        </li>

        <li className="roadMap__list-item" onClick={() => setRoad(2)}>
          <div className="div-container">
            <h3>02</h3>
            <h4>STAKING GOES LIVE</h4>
            <p>
              The EON Corporation Superbank begins rewarding Dusktopians staking their land plots
              with $DAWN.
            </p>
            <span className="borderrightroadmap"></span>
            <div className={`fade2-${road}`}></div>
          </div>
        </li>
        <li className="roadMap__list-item" onClick={() => setRoad(3)}>
          <div className="div-container">
            <h3>03</h3>
            <h4>NEW WORLDS EMERGE</h4>
            <p>
              Claim a slice of our secret land collection with $DAWN. Outfit your existing land with
              new properties and accessories.
            </p>
            <div className={`fade3-${road}`}></div>
            <span className="borderrightroadmap"></span>
          </div>
        </li>
        <li className="roadMap__list-item" onClick={() => setRoad(4)}>
          <div className="div-container">
            <h3>04</h3>
            <h4>AVATAR COLLECTION DROP</h4>
            <p>
              Get the PFP avatars you will use for in-universe interaction, synergized with your
              asset holdings.
            </p>
            <div className={`fade4-${road}`}></div>
            <span className="borderrightroadmap"></span>
          </div>
        </li>
        <li className="roadMap__list-item" onClick={() => setRoad(5)}>
          <div className="div-container">
            <h3>05</h3>
            <h4>LET THE GAMES BEGIN</h4>
            <div className={`fade5-${road}`}></div>
            <span className="borderrightroadmap"></span>
          </div>
        </li>
      </ul>
      <div className="bigFade1"></div>
      <img className="bigFade2" src={bigFade2} alt="bigFade2" />
      <img className="bigFade7" src={bigFade7} alt="bigFade7" />
      {road === 1 ? <img className="background1" src={background1} alt="background1" /> : null}
      {road === 2 ? <img className="background1" src={background2} alt="background1" /> : null}
      {road === 3 ? <img className="background1" src={background3} alt="background1" /> : null}
      {road === 4 ? <img className="background1" src={background4} alt="background1" /> : null}
      {road === 5 ? <img className="background1" src={background5} alt="background1" /> : null}
    </section>
  );
};

export default RoadMap;
