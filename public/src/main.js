// src/main.js
import { getGameState, updateProgress } from './game/stateManager.js';
import { getProblemsForPlane, handleProgression, isPlaneUnlocked } from './game/planeManager.js';
import { unlockNextPlane } from './game/traversalLogic.js';
import { startLearningMode } from './modes/learningMode.js';
import { startNonLearningMode } from './modes/nonLearningMode.js';
import { setupFeedbackListeners } from './components/feedbackUI.js';

function initGame() {
  console.log('Initializing the Math Adventure Game...');

  // Set up feedback listeners (listening for correct/incorrect answers)
  setupFeedbackListeners();

  // Choose game mode: Learning Mode or Non-Learning Mode
  const gameMode = prompt('Choose mode: (1) Learning Mode or (2) Non-Learning Mode');

  if (gameMode === '1') {
    startLearningMode(); // Start Learning Mode
  } else if (gameMode === '2') {
    startNonLearningMode(); // Start Non-Learning Mode
  } else {
    console.log('Invalid mode selected.');
  }
}

// Learning Mode: Solving problems and progressing through planes
function startLearningMode() {
  const gameState = getGameState();
  const currentPlane = gameState.currentPlane;

  // Check if the plane is unlocked
  if (isPlaneUnlocked(currentPlane)) {
    const problems = getProblemsForPlane(currentPlane);

    // Present problems for the current plane
    problems.forEach((problem) => {
      const userAnswer = prompt(problem.question);
      const isCorrect = userAnswer == problem.correctAnswer;

      if (isCorrect) {
        console.log('Correct!');
        handleProgression(currentPlane, isCorrect); // Handle progression within the plane
      } else {
        console.log('Incorrect, try again.');
      }
    });

    // Check if player can unlock the next plane
    unlockNextPlane();

  } else {
    console.log(`The plane ${currentPlane} is locked. Solve previous plane problems to unlock.`);
  }

  // Show current game state
  console.log('Game state:', getGameState());
}

// Non-Learning Mode: Free exploration without solving problems
function startNonLearningMode() {
  console.log('Non-learning mode activated. Explore freely without solving problems.');
}

// Start the game loop by clicking the start button
document.getElementById('start-game-btn').addEventListener('click', initGame);

