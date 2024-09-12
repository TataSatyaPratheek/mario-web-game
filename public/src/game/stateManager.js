// src/game/stateManager.js

const gameState = {
  currentPlane: 'Algebra',  // Start with Algebra
  progress: {
    Algebra: {
      problemsSolved: 0,
      totalProblems: 5,  // Total problems required to complete the plane
      unlocked: true
    },
    Geometry: {
      problemsSolved: 0,
      totalProblems: 5,
      unlocked: false
    },
    Trigonometry: {
      problemsSolved: 0,
      totalProblems: 5,
      unlocked: false
    },
    Probability: {
      problemsSolved: 0,
      totalProblems: 5,
      unlocked: false
    },
    Calculus: {
      problemsSolved: 0,
      totalProblems: 5,
      unlocked: false
    }
  }
};

// Function to update game progress
function updateProgress(plane, correct) {
  if (correct) {
    gameState.progress[plane].problemsSolved++;
  }
}

// Function to check if a plane is complete
function isPlaneComplete(plane) {
  return gameState.progress[plane].problemsSolved >= gameState.progress[plane].totalProblems;
}

// Get the current state of the game
function getGameState() {
  return gameState;
}

export { updateProgress, getGameState, isPlaneComplete };
