import React from 'react';
import './roadMap.css';
import arrows from '../../assets/images/arrows.png';

const RoadMap = () => {
  return (
    <section>
      <h2>
        <span></span>ROAD <img src={arrows} /> MAP
      </h2>
      <ul>
        <li>
          <h3>01</h3>
          <h4>GENESIS LANDS DROP</h4>
          <p>
            An original collection of 5,555 land plots will be made ready for the very first
            Dusktopian adventurers.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default RoadMap;
