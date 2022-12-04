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
            width: '1600px',
            // marginRight: '100px',
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
            display: 'none',
            height: 60,
            minWidth: 60,
            alignSelf: 'center',
          },
        }}
        backwardBtnProps={{
          children: '<',
          style: {
            display: 'none',
            width: 60,
            height: 60,
            minWidth: 60,
            alignSelf: 'center',
          },
        }}
        itemsToShow={4}
        speed={800}>
        <TeamSliderElement activeSlide={activeSlide} setActiveSlide={setActiveSlide} id={0} />
        <TeamSliderElement activeSlide={activeSlide} setActiveSlide={setActiveSlide} id={1} />
        <TeamSliderElement activeSlide={activeSlide} setActiveSlide={setActiveSlide} id={2} />
        <TeamSliderElement activeSlide={activeSlide} setActiveSlide={setActiveSlide} id={3} />
        <TeamSliderElement activeSlide={activeSlide} setActiveSlide={setActiveSlide} id={4} />
        <TeamSliderElement activeSlide={activeSlide} setActiveSlide={setActiveSlide} id={5} />
        <TeamSliderElement activeSlide={activeSlide} setActiveSlide={setActiveSlide} id={6} />
        <TeamSliderElement activeSlide={activeSlide} setActiveSlide={setActiveSlide} id={7} />
      </Carousel>
    </>
  );
};

export default TeamSlider;
