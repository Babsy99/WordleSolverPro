import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitGuess } from '../actions';

const InputGuess = () => {
    const [guess, setGuess] = useState('');
    const dispatch = useDispatch();
    const currentRow = useSelector(state => state.currentRow);
    const guesses = useSelector(state => state.guesses);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (guess.length === 5 && currentRow < 6) {
            dispatch(submitGuess(guess, currentRow));
            setGuess('');
            console.log('Submitting guess:', guess);

            // Wait for the next render cycle to ensure state is updated
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
                } catch (error) {
                    console.error('Error fetching next guess:', error);
                }
            }, 100); // Adjust delay if needed
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                id="guess-input"
                name="guess-input"
                type="text" 
                value={guess} 
                onChange={(e) => setGuess(e.target.value)} 
                maxLength="5" 
                pattern="[A-Za-z]{5}" 
                required 
            />
            <button type="submit">Submit Guess</button>
        </form>
    );
};

export default InputGuess;
