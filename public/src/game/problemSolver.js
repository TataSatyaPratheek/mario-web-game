// src/game/problemSolver.js

// Generates a random math problem based on the plane
function generateProblem(plane) {
    let problem = {};
    
    if (plane === 'Algebra') {
      const a = Math.floor(Math.random() * 10);
      const b = Math.floor(Math.random() * 10);
      problem = {
        question: `Solve for x: ${a}x + ${b} = 0`,
        correctAnswer: -b / a
      };
    } else if (plane === 'Geometry') {
      const radius = Math.floor(Math.random() * 10) + 1;
      problem = {
        question: `Find the area of a circle with radius ${radius}`,
        correctAnswer: Math.PI * Math.pow(radius, 2)
      };
    }
  
    return problem;
  }
  
  // Validates the user's answer
  function validateAnswer(problem, userAnswer) {
    return Math.abs(problem.correctAnswer - userAnswer) < 0.001;  // Allow small float tolerance
  }
  
  // Export the functions to be used in the game
  export { generateProblem, validateAnswer };
  