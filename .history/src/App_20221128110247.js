import './App.css';
import Colaborations from './components/colaborations/Colaborations';
import Factions from './components/factions/Factions';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Ourteam from './components/ourteam/Ourteam';
import Questions from './components/questions/Questions';
import RoadMap from './components/roadmap/RoadMap';
import Carousel from 'react-elastic-carousel';
import Carousel from 'react-simply-carousel';

function App() {
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
  );
}

export default App;
