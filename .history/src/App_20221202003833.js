import { useEffect } from 'react';
import './App.css';
import Colaborations from './components/colaborations/Colaborations';
import Factions from './components/factions/Factions';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import NavBar from './components/navBar/NavBar';
import NavBarMobile from './components/navBarMobile/NavBarMobile';
import Ourteam from './components/ourteam/Ourteam';
import Questions from './components/questions/Questions';
import RoadMap from './components/roadmap/RoadMap';

function App() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="App">
      <Main />
      <NavBar />
      <NavBarMobile />
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
