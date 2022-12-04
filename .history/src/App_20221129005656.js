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
    </div>
  );
}

export default App;
