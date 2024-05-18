import React from 'react';
import { useSelector } from 'react-redux';
import GuessRow from './GuessRow';

const GameBoard = () => {
    const guesses = useSelector(state => state.game.guesses);

    return (
        <div className="game-board">
            {guesses.map((guess, index) => (
                <GuessRow key={index} guess={guess} rowIndex={index} />
            ))}
        </div>
    );
};

export default GameBoard;
