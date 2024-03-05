import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);
  answersListElement.classList.add('answers-list');

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    // Answers options look little bit better now
    answerElement.classList.add('answer-element');
    answersListElement.appendChild(answerElement);

    answerElement.addEventListener('click', function clickHandler () {
      // When you click the answer, previous selection loses selection color
      const answerElements = document.querySelectorAll('.answer-element');
      answerElements.forEach((answer) => {
        answer.classList.remove('answer-selected', 'answer-correct', 'answer-incorrect');
      });

      // When you click the answer, it receives selection color
      answerElement.classList.add('answer-selected');

      // Selected answer receives a color depending on whether it's correct or not.
      // Then user moves to the next question
      const answerCorrect = function () {
        answerElement.classList.add('answer-correct');
        setTimeout(function () {
          nextQuestion();
        }, 500);
      };

      const answerIncorrect = function () {
        answerElement.classList.add('answer-incorrect');
        setTimeout(function () {
          nextQuestion();
        }, 500);
      };

      if (key === currentQuestion.correct) {
        setTimeout(answerCorrect, 500);
        correctCounter++;
      } else {
        setTimeout(answerIncorrect, 500);
      }
    });
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};
