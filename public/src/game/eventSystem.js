// src/game/eventSystem.js

const events = {};

// Subscribe to an event
function subscribe(event, listener) {
  if (!events[event]) {
    events[event] = [];
  }
  events[event].push(listener);
}

// Unsubscribe from an event
function unsubscribe(event, listener) {
  if (!events[event]) return;

  events[event] = events[event].filter((l) => l !== listener);
}

// Emit an event
function emit(event, data) {
  if (!events[event]) return;

  events[event].forEach((listener) => {
    listener(data);
  });
}

// Export the event methods
export { subscribe, unsubscribe, emit };
