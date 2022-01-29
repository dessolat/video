import { useState } from 'react';
import './App.css';
import trailer from './bond.mp4';

function App() {
  const [time, setTime] = useState(0);

  return (
    <div className='App'>
      <div className='container'>
        <div className='wrapper'>
					<h3 style={{textAlign: 'center'}}>{time}</h3>
          <video
            onTimeUpdate={e => setTime(e.target.currentTime)}
            src={trailer}
            autoPlay
            muted
            controls></video>
        </div>
      </div>
    </div>
  );
}

export default App;
