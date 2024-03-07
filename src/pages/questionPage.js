import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { createScorePanel } from '../views/scorePanelView.js';
import { initFinalPage } from './finalPage.js';

// Counts how many answers are correct. Every right answer will increment this variable by 1
let correctCounter = 0;

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  answersListElement.classList.add('answers-list');

  // Append realtime score panel into DOM
  const scorePanel = createScorePanel(
    correctCounter,
    quizData.questions.length
  );
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

      // Selected answer receives a color depending on whether it's correct or not.
      // After this answers become inactive
      const answerInactive = function () {
        answerElements.forEach((answer) => {
          answer.style.pointerEvents = 'none';
        });
      };

      const answerCorrect = function () {
        answerElement.classList.add('answer-correct');
        correctCounter++;
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

  // If this is the last question, after clicking "Next question" button a user will be moved to final page
  // Otherwise to the next question
  if (quizData.currentQuestionIndex === quizData.questions.length - 1) {
    document
      .getElementById(NEXT_QUESTION_BUTTON_ID)
      .addEventListener('click', toFinalPage);
  } else {
    document
      .getElementById(NEXT_QUESTION_BUTTON_ID)
      .addEventListener('click', nextQuestion);
  }
};

const toFinalPage = () => {
  initFinalPage(correctCounter, quizData.questions.length);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};
