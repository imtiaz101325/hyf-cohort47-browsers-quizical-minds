import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  RESTART_QUIZ_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { showResultPage } from '../pages/resultPage.js';
import { LOCAL_STORAGE_NAME } from '../constants.js';
import { restartQuiz } from '../pages/resultPage.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(
    currentQuestion.text,
    quizData.currentQuestionIndex,
    quizData.score
  );

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  answersListElement.classList.add('answers-list');

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    // Answers options look little bit better now
    answerElement.classList.add('answer-element');
    answerElement.setAttribute('data-key', key);
    answersListElement.appendChild(answerElement);

    answerElement.addEventListener('click', function clickHandler() {
      // When you click the answer, previous selection loses selection color
      const answerElements = document.querySelectorAll('.answer-element');
      answerElements.forEach((answer) => {
        answer.classList.remove(
          'answer-selected',
          'answer-correct',
          'answer-incorrect'
        );
      });

      // push the questions to localStorage to maintain the state even after refreshing (reloading) the page.
      pushToLocalStorage(currentQuestion, key);

      // After this answers become inactive
      const answerInactive = function () {
        answerElements.forEach((answer) => {
          if (answer.dataset.key === currentQuestion.correct) {
            answer.classList.add('answer-correct-value');
            answer.firstElementChild.classList.add('answer-correct-key');
          }
          answer.classList.add('nohover');
          answer.style.pointerEvents = 'none';
        });
      };

      const answerCorrect = function () {
        quizData.score++;
        answerInactive();
      };

      const answerIncorrect = function () {
        answerElement.classList.add('answer-incorrect-value');
        answerElement.firstElementChild.classList.add('answer-incorrect-key');
        answerInactive();
      };

      if (key === currentQuestion.correct) {
        answerCorrect();
      } else {
        answerIncorrect();
      }
    });
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);

  document
    .getElementById(RESTART_QUIZ_BUTTON_ID)
    .addEventListener('click', restartQuiz);
};

const pushToLocalStorage = (question = null, answer = null) => {
  quizData.questionsTracker.push({
    question: question.text,
    answer: answer,
    isCorrect: answer === question.correct ? true : false,
  });

  localStorage.setItem(
    LOCAL_STORAGE_NAME,
    JSON.stringify(quizData.questionsTracker)
  );
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  if (quizData.currentQuestionIndex !== quizData.questionsTracker.length) {
    pushToLocalStorage(
      quizData.questions[quizData.currentQuestionIndex - 1],
      null
    );
  }
  if (quizData.currentQuestionIndex === quizData.questions.length) {
    showResultPage();
  } else {
    initQuestionPage();
  }
};
