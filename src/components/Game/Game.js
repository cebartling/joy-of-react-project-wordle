import React from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import {checkGuess} from "../../game-helpers";
import HappyBanner from "../HappyBanner";
import SadBanner from "../SadBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function isGameWon(result) {
    return result.every((letter) => letter.status === 'correct');
}

function Game() {
    const [guesses, setGuesses] = React.useState([]);
    const [gameStatus, setGameStatus] = React.useState('inProgress');

    React.useEffect(() => {
        if (guesses.length > 0) {
            const result = guesses[guesses.length - 1]?.result;
            if (isGameWon(result)) {
                setGameStatus('won');
            } else if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
                setGameStatus('lost');
            }
        }
    }, [guesses]);

    function addGuess(guess) {
        const result = checkGuess(guess, answer);
        setGuesses((prevGuesses) => [...prevGuesses, {id: crypto.randomUUID(), result}]);
    }

    return (
        <>
            <GuessInput addGuess={addGuess} gameStatus={gameStatus}/>
            <GuessList guesses={guesses}/>
            {gameStatus === 'won' && <HappyBanner guesses={guesses}/>}
            {gameStatus === 'lost' && <SadBanner answer={answer}/>}
        </>
    );
}

export default Game;
