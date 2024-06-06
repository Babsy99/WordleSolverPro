const filterWords = (guesses) => {
    return possibleWords.filter(word => {
        return guesses.every((guess) => {
            // Track counts of letters
            const correctCounts = {};
            const presentCounts = {};
            
            // First pass to handle 'correct' letters
            for (let i = 0; i < guess.length; i++) {
                if (guess[i].status === 'correct') {
                    if (word[i] !== guess[i].value) {
                        return false;
                    }
                    correctCounts[guess[i].value] = (correctCounts[guess[i].value] || 0) + 1;
                }
            }

            // Second pass to handle 'present' and 'absent' letters
            for (let i = 0; i < guess.length; i++) {
                if (guess[i].status === 'present') {
                    if (!word.includes(guess[i].value) || word[i] === guess[i].value) {
                        return false;
                    }
                    presentCounts[guess[i].value] = (presentCounts[guess[i].value] || 0) + 1;
                } else if (guess[i].status === 'absent') {
                    if (correctCounts[guess[i].value] || presentCounts[guess[i].value]) {
                        const wordLetterCount = word.split('').filter(char => char === guess[i].value).length;
                        if (wordLetterCount > (correctCounts[guess[i].value] || 0) + (presentCounts[guess[i].value] || 0)) {
                            return false;
                        }
                    } else if (word.includes(guess[i].value)) {
                        return false;
                    }
                }
            }
            return true;
        });
    });
};

export const suggestNextGuess = (guesses) => {
    const filteredWords = filterWords(guesses);
    return filteredWords.length > 0 ? filteredWords[0] : null;

}