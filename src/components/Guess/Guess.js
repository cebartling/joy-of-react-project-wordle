import React from 'react';

function Guess({guess}) {
    if (!guess) {
        return (
            <p className="guess">
                <span className="cell"></span>
                <span className="cell"></span>
                <span className="cell"></span>
                <span className="cell"></span>
                <span className="cell"></span>
            </p>
        );
    } else {
        const guessArray = guess.split('');

        return (
            <p className="guess">
                <span className="cell">{guessArray[0]}</span>
                <span className="cell">{guessArray[1]}</span>
                <span className="cell">{guessArray[2]}</span>
                <span className="cell">{guessArray[3]}</span>
                <span className="cell">{guessArray[4]}</span>
            </p>
        );
    }
}

export default Guess;
