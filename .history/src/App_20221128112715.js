import './App.css';
import Colaborations from './components/colaborations/Colaborations';
import Factions from './components/factions/Factions';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Ourteam from './components/ourteam/Ourteam';
import Questions from './components/questions/Questions';
import RoadMap from './components/roadmap/RoadMap';
// import Carousel from 'react-elastic-carousel';
import Carousel from 'react-simply-carousel';
import { useState } from 'react';

function App() {
  const [activeNav, setActiveNav] = useState(0);

  return (
    <div className="App">
      <Main />
      <Factions />
      <RoadMap />
      <Colaborations />
      <Questions />
      <Ourteam />
      <Footer />
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
              zIndex: '4',
            },
          }}
          activeSlideIndex={activeNav}
          onRequestChange={setActiveNav}
          forwardBtnProps={{
            style: {
              display: 'block',
              padding: '10px',
            },
          }}
          backwardBtnProps={{
            style: {
              position: 'absolute',
              left: '-40px',
              alignSelf: 'center',
              background: 'black',
              border: 'none',
              borderRadius: '50%',
              color: 'white',
              cursor: 'pointer',
              fontSize: '20px',
              height: 30,
              lineHeight: 1,
              textAlign: 'center',
              width: 30,
            },
            children: <span>{`<`}</span>,
          }}
          itemsToShow={3}
          speed={1000}>
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
}

export default App;
