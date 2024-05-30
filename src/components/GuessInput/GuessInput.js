import React from 'react';

function GuessInput({addGuess}) {
    const [guess, setGuess] = React.useState('');

    const handleChange = (event) => {
        setGuess(event.target.value.toUpperCase());
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addGuess(guess);
        setGuess('');
    }

    return (
        <form className="guess-input-wrapper" onSubmit={handleSubmit}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input id="guess-input"
                   type="text"
                   required={true}
                   maxLength={5}
                   pattern="[A-Za-z]{5}"
                   title="Please enter exactly 5 alphabetic characters"
                   value={guess}
                   onChange={handleChange}/>
        </form>
    );
}

export default GuessInput;
