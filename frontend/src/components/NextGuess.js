import React from 'react';
import { useSelector } from 'react-redux';

const NextGuess = () => {
    const nextGuess = useSelector(state => state.game.nextGuess);

    return (
        <div className="next-guess">
            <h3>Next Best Guess</h3>
            <p>{nextGuess || 'N/A'}</p>
        </div>
    );
};

export default NextGuess;