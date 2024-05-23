import React from 'react';
import GameBoard from './GameBoard';
import InputGuess from './InputGuess';
import NextGuess from './NextGuess';
import '../styles/App.css';

const App = () => {
    return (
        <div className="App">
            <h1>Wordle Solver Pro</h1>
            <div className="game-container">
                <GameBoard />
                <InputGuess />
                <NextGuess />
            </div>
        </div>
    );
};

export default App;
