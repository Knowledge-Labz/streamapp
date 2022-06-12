import './App.css';
import { ReactFlvPlayer } from 'react-flv-player';
import { useState } from 'react';

function App() {
  const [validEntry, setValidEntry] = useState(false);
  return (
    <div className="App" >
      <br/><br/><br/><br/><br/><br/>
      <input></input>&emsp;
      {!validEntry ? <button
            onClick={() => window.open('https://google.ca')}>
            Join crowd
      </button> : <span/>}
          <br/><br/>
        {validEntry ? <ReactFlvPlayer
          url = "http://localhost:8000/live/ok.flv"
          heigh = "800px"
          width = "800px"
        /> : <iframe width="560" height="315" src="https://www.youtube.com/embed/xY-l_gDNeK4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
        <br/><button
          onClick={() => window.open('http://localhost:4242/create-checkout-session')}>Buy ticket</button>
    </div>
  );
}

export default App;
