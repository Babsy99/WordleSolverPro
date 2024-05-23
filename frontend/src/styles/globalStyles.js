import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica, sans-serif;
    }
    .App {
        text-align: center;
        padding: 20px;
    }
    .game-board {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
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
        font-size: 1.2rem;
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
    .next-guess {
        margin-top: 20px;
        font-size: 1.5rem;
    }
    @media (max-width: 768px) {
        .cell {
            width: 30px;
            height: 30px;
            margin: 3px;
            font-size: 1rem;
        }
        .next-guess {
            font-size: 1.2rem;
        }
    }
    @media (max-width: 480px) {
        .cell {
            width: 25px;
            height: 25px;
            margin: 2px;
            font-size: 0.8rem;
        }
        .next-guess {
            font-size: 1rem;
        }
        .game-container {
            flex-direction: column;
        }
        .App {
            padding: 10px;
        }
    }
`;

export default GlobalStyle;
