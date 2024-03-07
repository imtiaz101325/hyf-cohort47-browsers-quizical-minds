import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';
import { initQuestionPage } from './pages/questionPage.js';

const loadApp = () => {
  // quizData.currentQuestionIndex = 0;
  if (localStorage.questions === undefined || JSON.parse(localStorage.questions).length >= quizData.questions.length) {
    quizData.currentQuestionIndex = 0;
  } else {
      JSON.parse(localStorage.questions).forEach(question => {
        quizData.questionsTracker.push(question);
      });
      quizData.score = JSON.parse(localStorage.questions).filter(question => question.isCorrect).length;
      quizData.currentQuestionIndex = JSON.parse(localStorage.questions).length;
      return initQuestionPage();
  }

  return initWelcomePage();
};

window.addEventListener('load', loadApp);
