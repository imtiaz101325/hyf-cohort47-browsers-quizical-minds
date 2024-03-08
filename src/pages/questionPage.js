import {
  ANSWERS_LIST_ID,
  ANSWER_BUTTON_ID,
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
    const answerButton = document.createElement(ANSWER_BUTTON_ID);
    answerButton.textContent = answerText;
    answerButton.classList.add('answer-button');
    answersListElement.appendChild(answerButton);

    answerButton.addEventListener('click', function clickHandler() {
      // When you click the answer, previous selection loses selection color
      const answerButtons = document.querySelectorAll('.answer-button');
      answerButtons.forEach((button) => {
        button.classList.remove(
          'answer-selected',
          'answer-correct',
          'answer-incorrect'
        );
      });

      // When you click the answer, it receives selection color
      answerButton.classList.add('answer-selected');

      // Selected answer receives a color depending on whether it's correct or not.
      // Then user moves to the next question
      const answerCorrect = function () {
        answerButton.classList.add('answer-correct');
      };

      const answerIncorrect = function () {
        answerButton.classList.add('answer-incorrect');
        // Highlight correct answer
        const correctAnswerButton = document.querySelector(
          `[data-key="${currentQuestion.correct}"]`
        );
        correctAnswerButton.classList.add('answer-correct');
      };

      if (key === currentQuestion.correct) {
        answerCorrect();
      } else {
        answerIncorrect();
      }
    });

    // Add data-key attribute to identify correct answers
    if (key === currentQuestion.correct) {
      answerButton.setAttribute('data-key', key);
    }
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};
