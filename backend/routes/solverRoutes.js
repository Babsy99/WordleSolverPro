import express from 'express';
import { getSuggestion } from '../controllers/solverController.js';

const router = express.Router();

router.post('/guess', getSuggestion);

export default router;
