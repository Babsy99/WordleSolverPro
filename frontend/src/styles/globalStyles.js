import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica, sans-serif;
    }
    .App {
        text-align: center;
    }
    .game-board {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .guess-row {
        display: flex;
    }
    .cell {
        width: 40px;
        height: 40px;
        margin: 5px;
        border: 1px solid #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .empty {
        background-color: white;
    }
    .correct {
        background-color: green;
    }
    .present {
        background-color: yellow;
    }
    .absent {
        background-color: grey;
    }
    .controls {
        margin-top: 20px;
    }
`;

export default GlobalStyle;
