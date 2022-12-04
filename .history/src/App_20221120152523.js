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
      <div
        style={{
          clipPath: 'polygon(0 100%, 0 10%, 75% 10%, 85% 0, 100% 0, 100% 90%, 25% 90%, 15% 100%, )',
          height: '400px',
        }}></div>
    </div>
  );
}

export default App;
