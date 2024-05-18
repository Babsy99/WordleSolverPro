import React from 'react';
import { useDispatch } from 'react-redux';
import { resetGame, newGame } from '../actions';

export const Controls = () => {
    const dispatch = useDispatch();

    return (
        <div className="controls">
            <button onClick={() => dispatch(resetGame())}>Reset Game</button>
            <button onClick={() => dispatch(newGame())}>New Game</button>
        </div>
    );
};

