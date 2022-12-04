import './App.css';
import Button2 from './assets/utils/button2.0/Button2';
import Colaborations from './components/colaborations/Colaborations';
import Factions from './components/factions/Factions';
import Main from './components/main/Main';
import Ourteam from './components/ourteam/Ourteam';
import Questions from './components/questions/Questions';
import RoadMap from './components/roadmap/RoadMap';

function App() {
  return (
    <div className="App">
      <Main />
      <Factions />
      <RoadMap />
      <Colaborations />
      <Questions />
      <Ourteam />
    </div>
  );
}

export default App;
