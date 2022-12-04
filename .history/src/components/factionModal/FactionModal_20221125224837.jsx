import React from 'react';
import './factionModal.css';

const FactionModal = ({ activeFaction, setActiveFaction, title, info, locations }) => {
  const onOpenNextFaction = () => {
    console.log(1);
    switch (activeFaction.factionName) {
      case 'badlands':
        setActiveFaction({
          isActiveFaction: true,
          factionName: 'glacial',
          factionId: 1,
        });
        break;
      case 'glacial':
        setActiveFaction({
          isActiveFaction: true,
          factionName: 'sundered',
          factionId: 2,
        });
        break;
      case 'sundered':
        setActiveFaction({
          isActiveFaction: true,
          factionName: 'skycitadel',
          factionId: 3,
        });
        break;
      case 'skycitadel':
        setActiveFaction({
          isActiveFaction: true,
          factionName: 'badlands',
          factionId: 0,
        });
        break;
    }
  };

  return (
    <div>
      <div className="factionModal__button">
        <button
          className="factionModal__button-close"
          onClick={() => setActiveFaction({ ...activeFaction, isActiveFaction: false })}>
          Close
        </button>
        <button className="factionModal__button-next" onClick={onOpenNextFaction}>
          Next
        </button>
      </div>
      <img src={title} className="factionModal-title" alt="title" />
      <ul className="factionModal__info-list">
        <li className="factionModal__info-list-item">{info.at(0)}</li>
        <li className="factionModal__info-list-item">{info.at(1)}</li>
        <li className="factionModal__info-list-item">{info.at(2)}</li>
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
