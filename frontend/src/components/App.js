import React from 'react';
import { GameBoard } from './GameBoard';
import InputGuess from './InputGuess';
import { Controls } from './Controls';
import { Provider } from 'react-redux';
import store from '../store';
import '../App.css';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>Wordle Solver Pro</h1>
                <GameBoard />
                <InputGuess />
                <Controls />
            </div>
        </Provider>
    );
}

export default App;
