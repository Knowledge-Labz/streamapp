import './App.css';
import { ReactFlvPlayer } from 'react-flv-player';
function App() {
  return (
    <div className="App" >
      <br/><br/><br/><br/><br/><br/>
      <button
            onClick={() => window.open('https://google.ca')}>Join crowd</button>&emsp;
          <input></input><br/><br/>
        <ReactFlvPlayer
          url = "http://localhost:8000/live/ok.flv"
          heigh = "800px"
          width = "800px"
          isMuted={true}
        />
        <button
          onClick={() => window.open('https://google.ca')}>Buy ticket</button>
    </div>
  );
}

export default App;
