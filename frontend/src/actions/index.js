export const SET_GUESS = 'SET_GUESS';
export const SUBMIT_FEEDBACK = 'SUBMIT_FEEDBACK';
export const TOGGLE_CELL_STATUS = 'TOGGLE_CELL_STATUS';
export const SET_NEXT_GUESS = 'SET_NEXT_GUESS';
export const RESET_GAME = 'RESET_GAME';
export const NEW_GAME = 'NEW_GAME';

export const setGuess = (guess, rowIndex) => ({
    type: SET_GUESS,
    payload: { guess, rowIndex },
});

export const submitFeedback = () => ({
    type: SUBMIT_FEEDBACK,
});

export const toggleCellStatus = (rowIndex, cellIndex) => ({
    type: TOGGLE_CELL_STATUS,
    payload: { rowIndex, cellIndex },
});

export const setNextGuess = (nextGuess) => ({
    type: SET_NEXT_GUESS,
    payload: nextGuess,
});

export const resetGame = () => ({
    type: RESET_GAME,
});

export const newGame = () => ({
    type: NEW_GAME,
});
