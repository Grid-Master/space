import React from 'react';
import './roadMap.css';
import arrows from '../../assets/images/arrows.png';
import line from '../../assets/images/line1.png';
import fade1 from '../../assets/images/fade1.png';

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
        </li>
        <li className="roadMap__list-item">
          <h3>03</h3>
          <h4>NEW WORLDS EMERGE</h4>
          <p>
            Claim a slice of our secret land collection with $DAWN. Outfit your existing land with
            new properties and accessories.
          </p>
        </li>
        <li className="roadMap__list-item">
          <h3>04</h3>
          <h4>AVATAR COLLECTION DROP</h4>
          <p>
            Get the PFP avatars you will use for in-universe interaction, synergized with your asset
            holdings.
          </p>
        </li>
        <li className="roadMap__list-item">
          <h3>05</h3>
          <h4>LET THE GAMES BEGIN</h4>
        </li>
      </ul>
    </section>
  );
};

export default RoadMap;
