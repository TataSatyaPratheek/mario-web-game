// src/game/planeManager.js
import { getGameState, updateProgress } from './stateManager.js';
import { unlockNextPlane } from './traversalLogic.js';

// Array of planes and their associated problems
const planes = {
  Algebra: {
    problems: [
      { question: 'Solve 2x + 3 = 7', correctAnswer: 2 },
      { question: 'Factor x^2 - 4', correctAnswer: '(x - 2)(x + 2)' }
    ],
    unlocked: true
  },
  Geometry: {
    problems: [
      { question: 'Find the area of a circle with radius 5', correctAnswer: 78.54 },
      { question: 'Prove two triangles are congruent using SSS', correctAnswer: 'SSS' }
    ],
    unlocked: false
  },
  Trigonometry: {
    problems: [
      { question: 'Find sin(30°)', correctAnswer: 0.5 },
      { question: 'Convert 180° to radians', correctAnswer: 3.14 }
    ],
    unlocked: false
  }
};

// Function to fetch problems for the current plane
function getProblemsForPlane(plane) {
  return planes[plane].problems;
}

// Check if a plane is unlocked
function isPlaneUnlocked(plane) {
  const gameState = getGameState();
  return gameState.progress[plane]?.unlocked;
}

// Handle progression after solving a problem
function handleProgression(plane, correct) {
  if (correct) {
    updateProgress(plane, correct);
    unlockNextPlane();
  }
}

export { getProblemsForPlane, isPlaneUnlocked, handleProgression };
