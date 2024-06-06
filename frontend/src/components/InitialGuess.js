// components/InitialGuess.js
import React, { useEffect, useState } from 'react';

const InitialGuess = () => {
  const [guess, setGuess] = useState('');

  useEffect(() => {
    // Fetch the best initial guess from the backend
    fetch('/api/initial-guess')
      .then(response => response.json())
      .then(data => setGuess(data.guess));
  }, []);

  return (
    <div>
      <h2>Best Initial Guess</h2>
      <p>{guess}</p>
    </div>
  );
};

export default InitialGuess;