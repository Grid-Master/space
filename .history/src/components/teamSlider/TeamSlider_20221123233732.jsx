import React, { useState } from 'react';
import './teamSlider.css';
import Carousel from 'react-simply-carousel';
import TeamSliderElement from '../teamSliderElement/TeamSliderElement';

import avatar1 from '../../assets/images/avatar1.png';
import avatar1big from '../../assets/images/avatar1big.png';
import avatar2 from '../../assets/images/avatar2.png';
import avatar2big from '../../assets/images/avatar2big.png';
import avatar3 from '../../assets/images/avatar3.png';
import avatar3big from '../../assets/images/avatar3big.png';
import avatar4 from '../../assets/images/avatar4.png';
import avatar4big from '../../assets/images/avatar4big.png';

const team = [
  {
    id: 0,
    name: '@jaypegsonly',
    desc: 'Co-founder / Ecosystem Chief ',
    text: '@jaypegsonly was a corporate finance lawyer at a top global firm who has advised institutional clients, MNCs and VCs. He has worked on deals well over US$1B. Having delved into NFTs since July 2021, he brings his expertise and connections from Web2 into the Web3 world. With all these resources and experience, he aims to build a sustainable, scaleable ecosystem with Dusktopia.',
    img: avatar1,
    imgBig: avatar1big,
  },
  {
    id: 1,
    name: '@0xSUPERPOTATO',
    desc: 'Co-founder / Operations Chief',
    text: 'Before crypto, @0xSuperPotato was a commercial lawyer at a top disputes firm. He routinely worked on bet-the-company litigation against governments, mega funds, and multinationals — picking up blue chip experience with complex operational management and problem solving capabilities along the way. Now, he brings that to the Web3 space with Dusktopia.',
    img: avatar2,
    imgBig: avatar2big,
  },
  {
    id: 2,
    name: '@madking3126',
    desc: 'Co-founder / Design Chief',
    text: "@MadKing3126 has spent a huge portion of his life around games. He's experienced the full force of innovation within the Silicon Valley ecosystem, having spent the majority of his time in college in and around the Bay Area — and was pursuing a career in UI/UX design for startups before crypto and Web3 took over his life. His mission is now singular: to bring the best aesthetic and design aspects of the Web2 world to Dusktopia.",
    img: avatar3,
    imgBig: avatar3big,
  },
  {
    id: 3,
    name: '@ITSCUZZO',
    desc: 'Blockchain Chief',
    text: "@ItsCuzzo is the set of brains behind Dusktopia's smart contracts. He’s interested in all things Web3 and has worked with other major NFT projects in development, advisory and contract audit roles. Cuzzo’s considerable expertise will ensure that our technical back-end is top notch.",
    img: avatar4,
    imgBig: avatar4big,
  },
  {
    id: 4,
    name: '@jaypegsonly',
    desc: 'Co-founder / Ecosystem Chief ',
    text: '@jaypegsonly was a corporate finance lawyer at a top global firm who has advised institutional clients, MNCs and VCs. He has worked on deals well over US$1B. Having delved into NFTs since July 2021, he brings his expertise and connections from Web2 into the Web3 world. With all these resources and experience, he aims to build a sustainable, scaleable ecosystem with Dusktopia.',
    img: avatar1,
    imgBig: avatar1big,
  },
  {
    id: 5,
    name: '@0xSUPERPOTATO',
    desc: 'Co-founder / Operations Chief',
    text: 'Before crypto, @0xSuperPotato was a commercial lawyer at a top disputes firm. He routinely worked on bet-the-company litigation against governments, mega funds, and multinationals — picking up blue chip experience with complex operational management and problem solving capabilities along the way. Now, he brings that to the Web3 space with Dusktopia.',
    img: avatar2,
    imgBig: avatar2big,
  },
  {
    id: 6,
    name: '@madking3126',
    desc: 'Co-founder / Design Chief',
    text: "@MadKing3126 has spent a huge portion of his life around games. He's experienced the full force of innovation within the Silicon Valley ecosystem, having spent the majority of his time in college in and around the Bay Area — and was pursuing a career in UI/UX design for startups before crypto and Web3 took over his life. His mission is now singular: to bring the best aesthetic and design aspects of the Web2 world to Dusktopia.",
    img: avatar3,
    imgBig: avatar3big,
  },
  {
    id: 7,
    name: '@ITSCUZZO',
    desc: 'Blockchain Chief',
    text: "@ItsCuzzo is the set of brains behind Dusktopia's smart contracts. He’s interested in all things Web3 and has worked with other major NFT projects in development, advisory and contract audit roles. Cuzzo’s considerable expertise will ensure that our technical back-end is top notch.",
    img: avatar4,
    imgBig: avatar4big,
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
            width: '100%',
            height: '740px',
            zIndex: '2',
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
        itemsToShow={5}
        speed={400}
        autoplay={false}
        autoplayDirection>
        {/* <TeamSliderElement activeSlide={activeSlide} setActiveSlide={setActiveSlide} id={0} />
        <TeamSliderElement activeSlide={activeSlide} setActiveSlide={setActiveSlide} id={1} />
        <TeamSliderElement activeSlide={activeSlide} setActiveSlide={setActiveSlide} id={2} />
        <TeamSliderElement activeSlide={activeSlide} setActiveSlide={setActiveSlide} id={3} />
        <TeamSliderElement activeSlide={activeSlide} setActiveSlide={setActiveSlide} id={4} />
        <TeamSliderElement activeSlide={activeSlide} setActiveSlide={setActiveSlide} id={5} />
        <TeamSliderElement activeSlide={activeSlide} setActiveSlide={setActiveSlide} id={6} />
        <TeamSliderElement activeSlide={activeSlide} setActiveSlide={setActiveSlide} id={7} /> */}
        {team.map((el) => (
          <TeamSliderElement activeSlide={activeSlide} setActiveSlide={setActiveSlide} {...el} />
        ))}
      </Carousel>
    </>
  );
};

export default TeamSlider;
