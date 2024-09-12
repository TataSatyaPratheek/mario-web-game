// src/components/feedbackUI.js
import { subscribe } from '../game/eventSystem.js';

function showFeedbackMessage(message, type) {
  const feedbackDiv = document.createElement('div');
  feedbackDiv.className = `feedback ${type}`;
  feedbackDiv.innerHTML = `<p>${message}</p>`;
  document.body.appendChild(feedbackDiv);

  setTimeout(() => {
    feedbackDiv.remove();
  }, 3000);
}

// Listen for 'correct-answer' and 'incorrect-answer' events
function setupFeedbackListeners() {
  subscribe('correct-answer', () => {
    showFeedbackMessage('Correct! Well done!', 'success');
  });

  subscribe('incorrect-answer', () => {
    showFeedbackMessage('Incorrect. Try again.', 'error');
  });
}

export { setupFeedbackListeners };
