// src/game/traversalLogic.js
import { getGameState } from './stateManager.js';

// Function to check if the player can unlock new planes
function unlockNextPlane() {
  const state = getGameState();

  if (state.progress.Algebra.problemsSolved >= 2 && !state.progress.Geometry.unlocked) {
    state.progress.Geometry.unlocked = true;
    console.log('Geometry plane unlocked!');
  }

  if (state.progress.Geometry.problemsSolved >= 2 && !state.progress.Trigonometry.unlocked) {
    state.progress.Trigonometry.unlocked = true;
    console.log('Trigonometry plane unlocked!');
  }
}

export { unlockNextPlane };
