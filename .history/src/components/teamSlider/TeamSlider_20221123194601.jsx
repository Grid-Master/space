import React, { useState } from 'react';
import './teamSlider.css';
import Carousel from 'react-simply-carousel';
import TeamSliderElement from '../teamSliderElement/TeamSliderElement';

const TeamSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  console.log(activeSlide);

  return (
    <>
      <Carousel
        containerProps={{
          style: {
            width: '1200px',
            marginRight: '100px',
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
            position: 'absolute',
            rifht: 0,
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
        itemsToShow={2.5}
        speed={1000}>
        <TeamSliderElement activeSlide={activeSlide} id={0} />
        <TeamSliderElement activeSlide={activeSlide} id={1} />
        <TeamSliderElement activeSlide={activeSlide} id={2} />
        <TeamSliderElement activeSlide={activeSlide} id={3} />
      </Carousel>
      <button onClick={() => setActiveSlide(3)}>3</button>
    </>
  );
};

export default TeamSlider;
