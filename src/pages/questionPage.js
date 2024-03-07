import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { createScorePanel } from '../views/scorePanelView.js';
import { showResultPage } from '../pages/resultPage.js';


export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  answersListElement.classList.add('answers-list');

  // Append realtime score panel into DOM
  const scorePanel = createScorePanel(quizData.score, quizData.questions.length);
  userInterface.appendChild(scorePanel);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    // Answers options look little bit better now
    answerElement.classList.add('answer-element');
    answersListElement.appendChild(answerElement);

    answerElement.addEventListener('click', function clickHandler(evt) {
      // When you click the answer, previous selection loses selection color
      const answerElements = document.querySelectorAll('.answer-element');
      answerElements.forEach((answer) => {
        answer.classList.remove(
          'answer-selected',
          'answer-correct',
          'answer-incorrect'
        );
      });

      // When you click the answer, it receives selection color
      answerElement.classList.add('answer-selected');
      
      // push the questions to localStorage to maintain the state even after refreshing (reloading) the page.
      pushToLocalStorage(currentQuestion, key);

      // After this answers become inactive
      const answerInactive = function () {
        answerElements.forEach((answer) => {
          answer.style.pointerEvents = 'none';
        });
      };

      const answerCorrect = function () {
        answerElement.classList.add('answer-correct');
        quizData.score++;
        answerInactive();
      };

      const answerIncorrect = function () {
        answerElement.classList.add('answer-incorrect');
        answerInactive();
      };

      if (key === currentQuestion.correct) {
        setTimeout(answerCorrect, 500);
      } else {
        setTimeout(answerIncorrect, 500);
      }
    });

  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const pushToLocalStorage = (question = null, answer = null) => {
  quizData.questionsTracker.push({
    question: question.text,
    answer: answer,
    isCorrect: answer === question.correct ? true : false
  });
  
  localStorage.questions = JSON.stringify(quizData.questionsTracker);  
}

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  if (quizData.currentQuestionIndex !== quizData.questionsTracker.length) {
    pushToLocalStorage(quizData.questions[quizData.currentQuestionIndex-1], null);
  }
  if (quizData.currentQuestionIndex === quizData.questions.length) {
    showResultPage();
  } else {
    initQuestionPage();
  }
};