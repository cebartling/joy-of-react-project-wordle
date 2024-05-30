import React from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {
    const [guesses, setGuesses] = React.useState([]);

    function addGuess(guess) {
        if (guesses.length < NUM_OF_GUESSES_ALLOWED) {
            setGuesses((prevGuesses) => [...prevGuesses, {id: crypto.randomUUID(), guess}]);
        }
    }

    return (
        <>
            <GuessList guesses={guesses}/>
            <GuessInput addGuess={addGuess}/>
        </>
    );
}

export default Game;
