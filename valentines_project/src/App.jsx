import React, {useState} from 'react';
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
    const [showGiphy, setShowGiphy] = useState(false);
    const [showCrying, setShowCrying] = useState(false);

    function handleYesClick() {
        setShowYesDance(true);
        setHoverGif(''); // Reset hover GIF
        setPhrase('');
    }

    function handleNoClick() {
        setPhrase(getPhrase());
        setYesBtnSize(yesBtnSize + 0.1);
        setShowYesDance(false); // Hide the yesDance GIF if it's being shown
    }

    function handleYesHover() {
        if (!showYesDance) {
            setShowGiphy(true);
        }
    }

    function handleNoHover() {
        if (!showYesDance) {
            setShowCrying(true);
        }
    }

    function handleMouseLeave() {
        setShowGiphy(false);
        setShowCrying(false);
    }

    function getPhrase() {
        return phrases[Math.floor(Math.random() * phrases.length)];
    }

    return (
        <div className="container">
            <div className="text-side">
                <h1>Will you be my pookie for valentines?</h1>
                <div className="button-container">
                    <button
                        className="YES"
                        onMouseEnter={handleYesHover}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleYesClick}
                        style={{
                            transform: `scale(${yesBtnSize})`
                        }}>
                        Yes
                    </button>
                    <button
                        className="NO"
                        onMouseEnter={handleNoHover}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleNoClick}>
                        No
                    </button>
                </div>
                <div className="phrase-container">{phrase}</div>
            </div>
            <div className="gif-side">
                {showGiphy && <img src={giphy} alt="Giphy animation"/>}
                {showCrying && <img src={crying} alt="Crying animation"/>}
                {showYesDance && <img src={yesDance} alt="Yes Dance animation"/>}
            </div>
        </div>
    );
}

export default App;
