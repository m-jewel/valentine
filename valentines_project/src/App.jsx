import React, { useState } from 'react';
import './App.css';
import giphy from './assets/giphy.gif';
import crying from './assets/cry-crying.gif';
import yesDance from './assets/yesDance.gif';

const phrases = ["Are you sure?", "Pwetty pweases?", "Give me a chance?", "I'm gonna cry...", "Pookie pweases?"];

function App() {
  const [phrase, setPhrase] = useState('');
  const [yesBtnSize, setYesBtnSize] = useState(1);
  const [showYesDance, setShowYesDance] = useState(false);
  const [hoverGif, setHoverGif] = useState('');

  function handleYesClick() {
    setShowYesDance(true);
    setHoverGif(''); // Reset hover GIF
    // Optional: Reset the phrase if you don't want it to be displayed after "Yes" is clicked
    setPhrase('');
  }

  function handleNoClick() {
    setPhrase(getPhrase());
    setYesBtnSize(yesBtnSize + 0.1);
    setShowYesDance(false); // Hide the yesDance GIF if it's being shown
  }

  function handleYesHover() {
    if (!showYesDance) { // Only show hover GIF if the yesDance GIF is not being shown
      setHoverGif('giphy');
    }
  }

  function handleNoHover() {
    if (!showYesDance) {
      setHoverGif('crying');
    }
  }

  function handleMouseLeave() {
    setHoverGif(''); // Hide hover GIFs when not hovering
  }

  function getPhrase() {
    return phrases[Math.floor(Math.random() * phrases.length)];
  }

  return (
    <div className="container">
      <div className="text-side">
        <h1>Will you be my pookie for valentines?</h1>
        <button className="YES" onMouseEnter={handleYesHover} onMouseLeave={handleMouseLeave} onClick={handleYesClick} style={{ transform: `scale(${yesBtnSize})` }}>Yes</button>
        <button className="NO" onMouseEnter={handleNoHover} onMouseLeave={handleMouseLeave} onClick={handleNoClick}>No</button>
        <div>{phrase}</div>
      </div>
      <div className="gif-side">
        {hoverGif === 'giphy' && <div className='OMG'><img src={giphy} alt="Giphy animation"/></div>}
        {hoverGif === 'crying' && <div className='NYOO'><img src={crying} alt="Crying animation"/></div>}
        {showYesDance && <div className='yesDance'><img src={yesDance} alt="Yes Dance animation"/></div>}
      </div>
    </div>
  );
}

export default App;
