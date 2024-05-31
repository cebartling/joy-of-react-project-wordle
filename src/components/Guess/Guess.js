import React from 'react';

function Guess({guess, result}) {
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
                <span className={`cell ${result[0].status}`}>{guessArray[0]}</span>
                <span className={`cell ${result[1].status}`}>{guessArray[1]}</span>
                <span className={`cell ${result[2].status}`}>{guessArray[2]}</span>
                <span className={`cell ${result[3].status}`}>{guessArray[3]}</span>
                <span className={`cell ${result[4].status}`}>{guessArray[4]}</span>
            </p>
        );
    }
}

export default Guess;
