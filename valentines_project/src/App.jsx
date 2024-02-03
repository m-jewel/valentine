import React, {useState} from 'react';
import './App.css'
import giphy from './assets/giphy.gif';
import crying from './assets/cry-crying.gif';

const phrases = ["Are you sure?", "Pwetty pweases?", "Give me a chance?", "I'm gonna cry...", "Pookie pweases?"]
function App() {
    const [count, setCount] = useState(0)
    const [yesClicked, setYesClicked] = useState(false)
    const yesBtnSize = count * 20 + 16
    const [phrase, setPhrase] = useState('');

    function handleNoClick() {
        setCount(count + 1);
        setPhrase(getPhrase());
    }

    function getPhrase() {
        return phrases[Math.floor(Math.random() * phrases.length)]
    }

    return (
      <div className="container"> {/* Add the container class */}
        <h1>Will you be my pookie for valentines?</h1>
  
        <div>
          <button className="YES">Yes</button>
          <div className='OMG'>
            <img src={giphy} alt="Giphy animation"/>
          </div>
  
          <button onClick={handleNoClick} className="NO">No</button>
          <div className='NYOO'>
            <img src={crying} alt="Crying animation"/>
          </div>
          <span>{phrase}</span>
        </div>
      </div>
    );

}

export default App
