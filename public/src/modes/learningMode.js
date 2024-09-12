// src/modes/learningMode.js
import { emit, subscribe } from '../game/eventSystem.js';
import { generateProblem, validateAnswer } from '../game/problemSolver.js';
import { updateProgress } from '../game/stateManager.js';
import { unlockNextPlane } from '../game/traversalLogic.js';
import { renderPlaneList } from '../components/planeUI.js';
import { getGameState } from '../game/stateManager.js';

function startLearningMode() {
  const currentState = getGameState();
  const currentPlane = currentState.currentPlane;

  // Generate and display a problem
  const problem = generateProblem(currentPlane);
  
  // Render the problem UI
  renderProblem(problem);
  
  // Listen for user input (touch or keyboard) and validate the answer
  subscribe('user-input', (data) => {
    const isCorrect = validateAnswer(problem, data.answer);
    if (isCorrect) {
      updateProgress(currentPlane, true);
      emit('correct-answer'); // Emit correct answer event

      // Check if the player can unlock the next plane
      unlockNextPlane();

      // Render the updated plane list for traversal
      renderPlaneList();
    } else {
      emit('incorrect-answer'); // Emit incorrect answer event
    }
  });
}

export { startLearningMode };
