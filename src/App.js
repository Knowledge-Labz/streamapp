import './App.css';
import { ReactFlvPlayer } from 'react-flv-player';
function App() {
  return (
    <div className="App">
      <br/><br/><br/><br/><br/><br/>
        <ReactFlvPlayer
          url = "http://localhost/live/ok.flv"
          heigh = "800px"
          width = "800px"
          isMuted={true}
        />
    </div>
  );
}

export default App;
