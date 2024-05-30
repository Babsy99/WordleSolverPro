import { possibleWords } from './possibleWords.js';

const filterWords = (guesses) => {
    return possibleWords.filter(word => {
        return guesses.every((guess) => {
            return guess.every((cell, cellIndex) => {
                if (cell.status === 'correct') {
                    return word[cellIndex] === cell.value;
                }
                if (cell.status === 'present') {
                    return word.includes(cell.value) && word[cellIndex] !== cell.value;
                }
                if (cell.status === 'absent') {
                    return !word.includes(cell.value);
                }
                return true;
            });
        });
    });
};

export const suggestNextGuess = (guesses) => {
    const filteredWords = filterWords(guesses);
    return filteredWords.length > 0 ? filteredWords[0] : null;
};
