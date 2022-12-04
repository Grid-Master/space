import React, { useState } from 'react';
import './teamSlider.css';
import Carousel from 'react-simply-carousel';
import TeamSliderElement from '../teamSliderElement/TeamSliderElement';
import { team } from '../../assets/utils/team';

const TeamSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <Carousel
        containerProps={{
          style: {
            zIndex: '2',
          },
        }}
        activeSlideIndex={activeSlide}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          style: {
            display: 'none',
          },
        }}
        backwardBtnProps={{
          style: {
            display: 'none',
          },
        }}
        itemsToShow={5}
        speed={500}
        autoplayDelay={5000}
        autoplay={true}
        infinite={true}
        updateOnItemClick={false}>
        {team.map((el, index) => (
          <TeamSliderElement
            activeSlide={activeSlide}
            setActiveSlide={setActiveSlide}
            {...el}
            key={index}
          />
        ))}
      </Carousel>
      {team.map((el, index) =>
        activeSlide == el.id ? (
          <div className="teamSlider-info" key={index}>
            {el.text}
          </div>
        ) : null,
      )}
    </>
  );
};

export default TeamSlider;
