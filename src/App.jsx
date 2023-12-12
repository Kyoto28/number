import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [guess, setGuess] = useState('');
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [message, setMessage] = useState('');

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleInputChange = (event) => {
    setGuess(event.target.value);
  };

  const handleGuess = () => {
    const userGuess = parseInt(guess, 10);

    if (isNaN(userGuess)) {
      setMessage('Please enter a valid number.');
      return;
    }

    if (userGuess === randomNumber) {
      setMessage('Congratulations! You guessed the correct number.');
    } else {
      setMessage(
        userGuess < randomNumber
          ? 'Too low! Try again.'
          : 'Too high! Try again.'
      );
    }
  };

  return (
    <div className="App">
      <h1>Number Guessing Game</h1>
      <p>{message}</p>
      <input
        type="text"
        value={guess}
        onChange={handleInputChange}
        placeholder="Enter your guess"
      />
      <button onClick={handleGuess}>Submit Guess</button>
    </div>
  );
};

export default App;

h