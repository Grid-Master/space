import './App.css';
import Button1 from './assets/utils/button1/Button1';
import Factions from './components/factions/Factions';
import Main from './components/main/Main';
import RoadMap from './components/roadmap/RoadMap';

function App() {
  return (
    <div className="App">
      <Main />
      <Factions />
      <RoadMap />
    </div>
  );
}

export default App;
