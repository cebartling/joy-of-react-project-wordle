import React from 'react';
import Guess from "../Guess";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import {range} from "../../utils";

function GuessList({guesses}) {
    return (
        <div className="guess-results">
            {range(0, NUM_OF_GUESSES_ALLOWED).map((i) => (
                <Guess key={i}
                       result={guesses[i] ? guesses[i].result : undefined}/>
            ))}
        </div>
    );
}

export default GuessList;
