import React, { useState } from 'react';
import './teamSlider.css';
import Carousel from 'react-simply-carousel';
import TeamSliderElement from '../teamSliderElement/TeamSliderElement';

import avatar1 from '../../assets/images/avatar1.png';
import avatar1big from '../../assets/images/avatar1big.png';
import avatar2 from '../../assets/images/avatar2.png';
import avatar2big from '../../assets/images/avatar2big.png';

const team = [
  {
    name: '@jaypegsonly',
    desc: 'Co-founder / Ecosystem Chief ',
    text: '@jaypegsonly was a corporate finance lawyer at a top global firm who has advised institutional clients, MNCs and VCs. He has worked on deals well over US$1B. Having delved into NFTs since July 2021, he brings his expertise and connections from Web2 into the Web3 world. With all these resources and experience, he aims to build a sustainable, scaleable ecosystem with Dusktopia.',
    img: avatar1,
    imgBig: avatar1big,
  },
  {
    name: '@0xSUPERPOTATO',
    desc: 'Co-founder / Operations Chief',
    text: 'Before crypto, @0xSuperPotato was a commercial lawyer at a top disputes firm. He routinely worked on bet-the-company litigation against governments, mega funds, and multinationals — picking up blue chip experience with complex operational management and problem solving capabilities along the way. Now, he brings that to the Web3 space with Dusktopia.',
    img: avatar2,
    imgBig: avatar2big,
  },
];

const TeamSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <>
      <Carousel
        containerProps={{
          style: {
            // position: 'absolute',
            // right: '-259px',
            // top: '231px',
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
        itemsToShow={3.5}
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
