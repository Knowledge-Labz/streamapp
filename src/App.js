import './App.css';
import { ReactFlvPlayer } from 'react-flv-player';
import { useState } from 'react';
import useQueryString from "./useQueryString";

function App() {
  const [validEntry, setValidEntry] = useState(false);
  const [enteredTicket, setEnteredTicket] = useState("");
  const ticketId = useQueryString('ticketId');
  const denied = useQueryString('denied');
  console.log(ticketId);
  console.log(denied);

  const checkTicketValidity = (candidate) => {
    fetch(process.env.REACT_APP_BACKEND + 'is-valid?ticketId=' + candidate).then((response) => {
      // check if status code is 200
      if (response.status === 200) {
        return setValidEntry(true);
      } else {
        return setValidEntry(false);
      }
    }).catch((error) => {
      console.log(error);
      return setValidEntry(false);
    }
    );
  }
  return (
    <div className="App" >
      <br/><br/><br/><br/><br/><br/>
      <input value={enteredTicket} onChange={(e) => setEnteredTicket(e.target.value)}></input>&emsp;
      {!validEntry ? <button
            onClick={() => checkTicketValidity(enteredTicket)}>
            Join crowd
      </button> : <span/>}
          <br/><br/>
        {validEntry ? <ReactFlvPlayer
          url = {process.env.REACT_APP_STREAM_ENDPOINT}
          heigh = "800px"
          width = "800px"
        /> : <iframe width="560" height="315" src={process.env.REACT_APP_IFRAME_PLACEHOLDER} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
        <br/><button
          onClick={() => window.open(process.env.REACT_APP_BACKEND + 'create-checkout-session')}>Buy ticket</button>
        <br/><br/>
        <div className='message'>
        {ticketId[0] !== undefined ? (<p>Your ticket number is <b>{ticketId[0]}</b>, please keep it safe until the show!</p>) : <span/>}
        {denied[0] !== undefined ? (<p>Yor purchase could not be completed.</p>) : <span/>}
        </div>
    </div>
  );
}

export default App;
