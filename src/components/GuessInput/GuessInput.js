import React from 'react';

function GuessInput() {
    const [guess, setGuess] = React.useState('');

    const handleChange = (event) => {
        setGuess(event.target.value.toUpperCase());
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(guess);
        setGuess('');
    }

    return (
        <form className="guess-input-wrapper" onSubmit={handleSubmit}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input id="guess-input"
                   type="text"
                   required={true}
                   maxLength={6}
                   pattern="[A-Za-z]{6}"
                   title="Please enter exactly 6 alphabetic characters"
                   value={guess}
                   onChange={handleChange}/>
        </form>
    );
}

export default GuessInput;
