import React, { useState } from 'react';
import './teamSlider.css';
import Carousel from 'react-simply-carousel';
import TeamSliderElement from '../teamSliderElement/TeamSliderElement';

const TeamSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <Carousel
        containerProps={{
          style: {
            width: '100%',

            userSelect: 'text',
          },
        }}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
            background: 'green',
          },
        }}
        onRequestChange={setActiveSlide}
        forwardBtnProps={{
          children: '>',
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: 'center',
          },
        }}
        backwardBtnProps={{
          children: '<',
          style: {
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: 'center',
          },
        }}
        itemsToShow={3.5}
        speed={600}>
        <TeamSliderElement />
        <TeamSliderElement />
        <TeamSliderElement />
        <TeamSliderElement />
      </Carousel>
    </>
  );
};

export default TeamSlider;
