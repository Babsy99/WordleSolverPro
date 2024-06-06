import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import guessRoutes from './routes/solverRoutes.js';
import initialGuessRoutes from './routes/initialGuessRoutes.js'; // Import the new routes

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api', guessRoutes);
app.use('/api', initialGuessRoutes); // Use the new routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Function to calculate the best initial guess
const getBestInitialGuess = () => {
    // Implement your logic to determine the best initial guess
    return "Your best initial guess";
};

// New route to provide the best initial guess
app.get('/api/initial-guess', (req, res) => {
    const guess = getBestInitialGuess();
    res.json({ guess });
});