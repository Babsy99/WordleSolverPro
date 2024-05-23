import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGuess, submitFeedback, setNextGuess } from '../actions';

const InputGuess = () => {
    const [guess, setGuessInput] = useState('');
    const dispatch = useDispatch();
    const currentRow = useSelector(state => state.game.currentRow);
    const guesses = useSelector(state => state.game.guesses);

    const handleGuess = () => {
        if (guess.length === 5) {
            dispatch(setGuess(guess, currentRow));
            setGuessInput('');
        }
    };

    const handleSubmit = async () => {
        if (currentRow < 6) {
            dispatch(submitFeedback());
            console.log('Submitted Feedback');
            console.log('Current Guesses:', guesses);

            // Delay to ensure state is updated before fetching the next guess
            setTimeout(async () => {
                try {
                    const response = await fetch('http://localhost:5000/api/guess', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ guesses }),
                    });
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();
                    console.log('Next best guess:', data.nextGuess);
                    dispatch(setNextGuess(data.nextGuess)); // Update the state with next best guess
                } catch (error) {
                    console.error('Error fetching next guess:', error);
                }
            }, 100); // Adjust delay if needed
        }
    };

    return (
        <div>
            <input
                id="guess-input"
                name="guess-input"
                type="text"
                value={guess}
                onChange={(e) => setGuessInput(e.target.value)}
                maxLength="5"
                pattern="[A-Za-z]{5}"
                required
            />
            <button onClick={handleGuess}>Guess</button>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default InputGuess;
