export const SUBMIT_GUESS = 'SUBMIT_GUESS';
export const TOGGLE_CELL_STATUS = 'TOGGLE_CELL_STATUS';
export const RESET_GAME = 'RESET_GAME';
export const NEW_GAME = 'NEW_GAME';

export const submitGuess = (guess, rowIndex) => ({
    type: SUBMIT_GUESS,
    payload: { guess, rowIndex },
});

export const toggleCellStatus = (rowIndex, cellIndex) => ({
    type: TOGGLE_CELL_STATUS,
    payload: { rowIndex, cellIndex },
});

export const resetGame = () => ({
    type: RESET_GAME,
});

export const newGame = () => ({
    type: NEW_GAME,
});
