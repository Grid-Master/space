import React from 'react';
import { useState } from 'react';
import './navBar.css';
// import Carousel from 'react-elastic-carousel';
import Carousel from 'react-simply-carousel';

const NavBar = () => {
  const [activeNav, setActiveNav] = useState(0);

  return (
    <div>
      {/* <Carousel
        className="carousel"
        itemsToShow={3}
        itemsToScroll={2}
        pagination={false}
        focusOnSelect={true}
        showArrows={true}
        initialActiveIndex={2}>
        <div onClick={() => window.scrollTo(0, 0)}>Home</div>
        <div onClick={() => window.scrollTo(0, window.innerHeight)}>Factions</div>
        <div onClick={() => window.scrollTo(0, 1980)}>Roadmap</div>
        <div onClick={() => window.scrollTo(0, 3587)}>Collaborations</div>
        <div onClick={() => window.scrollTo(0, 4243)}>FAQ</div>
        <div onClick={() => window.scrollTo(0, 5990)}>Team</div>
      </Carousel> */}
      <div className="carousel">
        <Carousel
          containerProps={{
            style: {
              zIndex: '3',
            },
          }}
          activeSlideIndex={activeNav + 1}
          onRequestChange={setActiveNav}
          forwardBtnProps={{
            style: {
              position: 'absolute',
              right: '-20px',
              top: '-2px',
              alignSelf: 'center',
              background: 'white',
              border: 'none',
              borderRadius: '50%',
              color: 'black',
              cursor: 'pointer',
              fontSize: '20px',
              height: 30,
              lineHeight: 1,
              textAlign: 'center',
              width: 30,
            },
            children: <span>{`>`}</span>,
          }}
          backwardBtnProps={{
            style: {
              position: 'absolute',
              left: '-60px',
              top: '-3px',
              alignSelf: 'center',
              background: 'white',
              border: 'none',
              borderRadius: '50%',
              color: 'black',
              cursor: 'pointer',
              fontSize: '20px',
              height: 30,
              lineHeight: 1,
              textAlign: 'center',
              width: 30,
            },
            children: <span>{`<`}</span>,
          }}
          itemsToScroll={1}
          speed={3000}
          autoplayDelay={0}
          autoplay={true}
          infinite={true}>
          <div onClick={() => window.scrollTo(0, 0)}>Home</div>
          <div onClick={() => window.scrollTo(0, window.innerHeight)}>Factions</div>
          <div onClick={() => window.scrollTo(0, 1980)}>Roadmap</div>
          <div onClick={() => window.scrollTo(0, 3587)}>Collaborations</div>
          <div onClick={() => window.scrollTo(0, 4243)}>FAQ</div>
          <div onClick={() => window.scrollTo(0, 5990)}>Team</div>
        </Carousel>
      </div>
    </div>
  );
};

export default NavBar;
