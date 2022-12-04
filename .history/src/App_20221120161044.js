import './App.css';
import Factions from './components/factions/Factions';
import Main from './components/main/Main';
import RoadMap from './components/roadmap/RoadMap';

function App() {
  return (
    <div className="App">
      <Main />
      <Factions />
      <RoadMap />
      <div className="div">
        <button className="dick">button</button>
      </div>
    </div>
  );
}

export default App;
