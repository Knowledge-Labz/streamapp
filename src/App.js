import './App.css';
import { ReactFlvPlayer } from 'react-flv-player';
import background from '../public/4000x4000.gif';
function App() {
  return (
    <div className="App" style={{ backgroundImage: background }}>
      <br/><br/><br/><br/><br/><br/>
        <ReactFlvPlayer
          url = "http://localhost:8000/live/ok.flv"
          heigh = "800px"
          width = "800px"
          isMuted={true}
        />
    </div>
  );
}

export default App;
