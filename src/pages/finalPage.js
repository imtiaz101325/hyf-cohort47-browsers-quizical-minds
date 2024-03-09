import { createFinalElement } from '../views/finalPageView.js';
import { USER_INTERFACE_ID } from '../constants.js';
import { quizData } from '../data.js';
import { initWelcomePage } from '../pages/welcomePage.js';
import { createRestartButton } from '../views/finalPageView.js';

export const initFinalPage = (counter, questions) => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const finalPage = createFinalElement(counter, questions);
  userInterface.appendChild(finalPage);

  // Restart button
  const restartButton = createRestartButton();
  restartButton.addEventListener('click', restartQuiz);
  userInterface.appendChild(restartButton);
};

export const restartQuiz = () => {
  // Reset the quiz data and start a new quiz
  quizData.currentQuestionIndex = 0;
  quizData.score = 0;
  quizData.questionsTracker = [];
  localStorage.clear();

  initWelcomePage();
};
