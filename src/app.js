import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { initQuestionPage } from './pages/questionPage.js';
import { LOCAL_STORAGE_NAME } from './constants.js';

const SAVED_DATA = JSON.parse(localStorage.getItem(LOCAL_STORAGE_NAME));

const loadApp = () => {
  currentState(SAVED_DATA);
};

const currentState = (SAVED_DATA) => {
  if (SAVED_DATA === null || SAVED_DATA.length >= quizData.questions.length) {
    quizData.currentQuestionIndex = 0;
    return initWelcomePage();
  } else {
    SAVED_DATA.forEach(question => {
      quizData.questionsTracker.push(question);
    });
    quizData.score = SAVED_DATA.filter(question => question.isCorrect).length;
    quizData.currentQuestionIndex = SAVED_DATA.length;
    return initQuestionPage();
  }
}

window.addEventListener('load', loadApp);
