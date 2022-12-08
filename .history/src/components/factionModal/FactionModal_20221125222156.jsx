import React from 'react';
import './factionModal.css';

const factions = [
  {
    factionName: 'badlands',
    factionId: 0,
  },
  {
    factionName: 'glacial',
    factionId: 1,
  },
  {
    factionName: 'sundered',
    factionId: 2,
  },
  {
    factionName: 'skycitadel',
    factionId: 3,
  },
];

const FactionModal = ({ setActiveFaction, title, info, locations }) => {
  return (
    <div>
      <div className="factionModal__button">
        <button className="factionModal__button-close" onClick={() => setActiveFaction(0)}>
          Close
        </button>
        <button className="factionModal__button-next">Next</button>
      </div>
      <img src={title} className="factionModal-title" alt="title" />
      <ul className="factionModal__info-list">
        <li className="factionModal__info-list-item">{info.at(0)}</li>
        <li className="factionModal__info-list-item">
          The first thing that counts here is survival Only then can you think of profit; then
          finally domination
        </li>
        <li className="factionModal__info-list-item">
          Forge your alliances with the EON Corporation, the rival mafia gangs, or even an utterly
          corrupt police force - and crush all standing in your way
        </li>
      </ul>
      <div className="factionModal-locations">
        {locations.map((img) => (
          <div className="factionModal-locations-container">
            <img src={img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FactionModal;