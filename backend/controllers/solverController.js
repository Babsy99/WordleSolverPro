import { suggestNextGuess } from '../solver/solver.js';

export const getSuggestion = (req, res) => {
    const { guesses } = req.body;
    const nextGuess = suggestNextGuess(guesses);
    res.json({ nextGuess });
};
