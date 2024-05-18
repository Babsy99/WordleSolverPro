import React from 'react';
import Cell from './Cell';

export const GuessRow = ({ guess, rowIndex }) => {
    return (
        <div className="guess-row">
            {guess.map((cell, cellIndex) => (
                <Cell 
                    key={cellIndex} 
                    rowIndex={rowIndex} 
                    cellIndex={cellIndex} 
                    value={cell.value} 
                    status={cell.status} 
                />
            ))}
        </div>
    );
};
