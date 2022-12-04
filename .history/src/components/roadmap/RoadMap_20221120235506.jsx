import React from 'react';
import './roadMap.css';
import arrows from '../../assets/images/arrows.png';
import line from '../../assets/images/line1.png';
import fade1 from '../../assets/images/fade1.png';
import fade2 from '../../assets/images/fade2.png';
import fade3 from '../../assets/images/fade3.png';
import fade4 from '../../assets/images/fade4.png';
import fade5 from '../../assets/images/fade5.png';
import bigFade1 from '../../assets/images/bigfade1.png';
import bigFade2 from '../../assets/images/bigfade2.png';
import bigFade7 from '../../assets/images/bigfade7.png';
import Button1 from '../../assets/utils/button1/Button1';

const RoadMap = () => {
  return (
    <section className="roadMap">
      <h2 className="roadMap__title">
        <span>OUR WAY</span>
        <img className="line" src={line} alt="line" />
        ROAD <img src={arrows} alt="arrows" /> MAP
      </h2>
      <ul className="roadMap__list">
        <li className="roadMap__list-item">
          <h3>01</h3>
          <h4>GENESIS LANDS DROP</h4>
          <p>
            An original collection of 5,555 land plots will be made ready for the very first
            Dusktopian adventurers.
          </p>
          <img className="fade1" src={fade1} alt="fade1" />
        </li>
        <li className="roadMap__list-item">
          <h3>02</h3>
          <h4>STAKING GOES LIVE</h4>
          <p>
            The EON Corporation Superbank begins rewarding Dusktopians staking their land plots with
            $DAWN.
          </p>
          <img className="fade2" src={fade2} alt="fade2" />
        </li>
        <li className="roadMap__list-item">
          <h3>03</h3>
          <h4>NEW WORLDS EMERGE</h4>
          <p>
            Claim a slice of our secret land collection with $DAWN. Outfit your existing land with
            new properties and accessories.
          </p>
          <img className="fade3" src={fade3} alt="fade3" />
        </li>
        <li className="roadMap__list-item">
          <h3>04</h3>
          <h4>AVATAR COLLECTION DROP</h4>
          <p>
            Get the PFP avatars you will use for in-universe interaction, synergized with your asset
            holdings.
          </p>
          <img className="fade4" src={fade4} alt="fade4" />
        </li>
        <li className="roadMap__list-item">
          <h3>05</h3>
          <h4>LET THE GAMES BEGIN</h4>
          <img className="fade5" src={fade5} alt="fade5" />
        </li>
      </ul>
      <img className="bigFade1" src={bigFade1} alt="bigFade1" />
      <img className="bigFade2" src={bigFade2} alt="bigFade2" />
      <img className="bigFade7" src={bigFade7} alt="bigFade7" />
    </section>
  );
};

export default RoadMap;
