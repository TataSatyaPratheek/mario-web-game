// src/components/problemUI.js
import { initializeInput } from './inputManager.js';

// Function to render the math problem UI
function renderProblem(problem) {
  const problemContainer = document.getElementById('problem-container');
  problemContainer.innerHTML = `
    <p>${problem.question}</p>
    <input type="text" id="answerInput" placeholder="Enter your answer">
  `;

  // Initialize input handling for both touch and keyboard
  initializeInput('answerInput');
}

export { renderProblem };
