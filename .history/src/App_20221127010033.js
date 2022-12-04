import './App.css';
import Colaborations from './components/colaborations/Colaborations';
import Factions from './components/factions/Factions';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Ourteam from './components/ourteam/Ourteam';
import Questions from './components/questions/Questions';
import RoadMap from './components/roadmap/RoadMap';
import Carousel from 'react-elastic-carousel';

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
      <Carousel
        className="carousel"
        itemsToShow={3}
        itemsToScroll={1}
        pagination={false}
        focusOnSelect={true}
        showArrows={true}
        initialActiveIndex={2}>
        <div></div>
        <div>Home</div>
        <div onClick={() => window.scrollTo(0, window.innerHeight)}>Factions</div>
        <div onClick={() => window.scrollTo(0, 1980)}>Roadmap</div>
        <div>Collaborations</div>
        <div>FAQ</div>
        <div>Team</div>
        <div></div>
      </Carousel>
    </div>
  );
}

export default App;
