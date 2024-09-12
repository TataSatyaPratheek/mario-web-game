// src/components/inputManager.js
import { emit } from '../game/eventSystem.js';

// Handle user input from touch devices
function handleTouchInput(inputElementId) {
  const inputElement = document.getElementById(inputElementId);

  inputElement.addEventListener('input', (event) => {
    const userAnswer = event.target.value;
    emit('user-input', { answer: parseFloat(userAnswer) });
  });
}

// Handle keyboard input
function handleKeyboardInput(inputElementId) {
  const inputElement = document.getElementById(inputElementId);

  inputElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const userAnswer = event.target.value;
      emit('user-input', { answer: parseFloat(userAnswer) });
    }
  });
}

// Initialize input handling for both touch and keyboard
function initializeInput(inputElementId) {
  handleTouchInput(inputElementId);
  handleKeyboardInput(inputElementId);
}

export { initializeInput };
