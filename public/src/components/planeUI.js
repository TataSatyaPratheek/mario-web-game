// src/components/planeUI.js
import { getGameState } from '../game/stateManager.js';

// Function to render the list of unlocked planes for traversal
function renderPlaneList() {
  const gameState = getGameState();
  const planeList = document.getElementById('plane-list');
  
  // Clear previous plane list
  planeList.innerHTML = '';

  // Loop through each plane and display if unlocked
  for (const plane in gameState.progress) {
    if (gameState.progress[plane].unlocked) {
      const planeItem = document.createElement('li');
      planeItem.textContent = `${plane} (Problems Solved: ${gameState.progress[plane].problemsSolved}/${gameState.progress[plane].totalProblems})`;
      
      // Handle click to travel to the plane
      planeItem.addEventListener('click', () => {
        console.log(`Traveling to ${plane} plane.`);
        // Here you can handle what happens when a plane is selected, like loading its problems
      });

      planeList.appendChild(planeItem);
    }
  }

  // Show the plane traversal section
  document.getElementById('plane-traversal').style.display = 'block';
}

export { renderPlaneList };
