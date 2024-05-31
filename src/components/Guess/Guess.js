import React from 'react';

function Guess({result}) {
    if (!result) {
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
        return (
            <p className="guess">
                <span className={`cell ${result[0].status}`}>{result[0].letter}</span>
                <span className={`cell ${result[1].status}`}>{result[1].letter}</span>
                <span className={`cell ${result[2].status}`}>{result[2].letter}</span>
                <span className={`cell ${result[3].status}`}>{result[3].letter}</span>
                <span className={`cell ${result[4].status}`}>{result[4].letter}</span>
            </p>
        );
    }
}

export default Guess;
