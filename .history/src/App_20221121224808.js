import './App.css';
import Button2 from './assets/utils/button2.0/Button2';
import Factions from './components/factions/Factions';
import Main from './components/main/Main';
import RoadMap from './components/roadmap/RoadMap';

function App() {
  return (
    <div className="App">
      <Main />
      <Factions />
      <RoadMap />
      {/* <Button2 /> */}
    </div>
  );
}

export default App;
