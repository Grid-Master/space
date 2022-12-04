import React, { useState } from 'react';
import './teamSlider.css';
import Carousel from 'react-simply-carousel';

const TeamSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <Carousel
        containerProps={{
          style: {
            width: '100%',
            justifyContent: 'space-between',
            userSelect: 'text',
          },
        }}
        activeSlideIndex={activeSlide}
        activeSlideProps={{
          style: {
            background: 'blue',
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
        itemsToShow={3}
        speed={400}>
        {Array.from({ length: 4 }).map((item, index) => (
          <div
            style={{
              background: 'yellow',
              width: 300,
              height: 300,
              border: '30px solid white',
              textAlign: 'center',
              lineHeight: '240px',
              boxSizing: 'border-box',
            }}
            key={index}>
            {index}
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default TeamSlider;
