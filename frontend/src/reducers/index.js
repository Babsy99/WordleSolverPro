import { SET_GUESS, SUBMIT_FEEDBACK, TOGGLE_CELL_STATUS, RESET_GAME, NEW_GAME } from '../actions';

const initialState = {
    guesses: Array(6).fill(null).map(() => Array(5).fill({ value: '', status: 'empty' })),
    currentRow: 0,
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GUESS:
            if (state.currentRow >= 6) return state;
            const newGuesses = [...state.guesses];
            const guessArray = action.payload.guess.split('').map((char) => ({ value: char, status: 'empty' }));
            newGuesses[action.payload.rowIndex] = guessArray;
            return {
                ...state,
                guesses: newGuesses,
            };

        case TOGGLE_CELL_STATUS:
            const { rowIndex, cellIndex } = action.payload;
            const updatedGuesses = state.guesses.map((row, rIdx) =>
                row.map((cell, cIdx) =>
                    rIdx === rowIndex && cIdx === cellIndex
                        ? { ...cell, status: nextStatus(cell.status) }
                        : cell
                )
            );
            return { ...state, guesses: updatedGuesses };

        case SUBMIT_FEEDBACK:
            return {
                ...state,
                currentRow: state.currentRow + 1,
            };

        case RESET_GAME:
        case NEW_GAME:
            return initialState;

        default:
            return state;
    }
};

const nextStatus = (currentStatus) => {
    const statuses = ['empty', 'correct', 'present', 'absent'];
    const currentIndex = statuses.indexOf(currentStatus);
    return statuses[(currentIndex + 1) % statuses.length];
};

export default gameReducer;
