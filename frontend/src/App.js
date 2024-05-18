import React from 'react';
import GameBoard from './components/GameBoard';
import InputGuess from './components/InputGuess';
import NextGuess from './components/NextGuess';
import './App.css';

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
