import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { RESTART_QUIZ_BUTTON_ID } from '../constants.js';
import { quizData } from "../data.js";

/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question, counter, answers) => {
  const element = document.createElement('div');
  element.classList.add('q-container');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <ul class="header-panel">
      <li class="question-counter">Question: ${counter+1} of ${quizData.totalPoints}</li>
      <li class="correct-answers-counter">Correct answers: ${answers}</li>
    </ul>

    <div id="question-text"><h2>${question}</h2></div>

    <ul id="${ANSWERS_LIST_ID}"></ul>

    <div class="footer-section">
      <div class="cta-btns">
        <button id="${RESTART_QUIZ_BUTTON_ID}"><i class="fa-solid fa-rotate-left"></i> Restart quiz</button>
        <button id="${NEXT_QUESTION_BUTTON_ID}"><i class="fa-solid fa-chevron-right"></i> Next question</button>
      </div>
    </div>
  `;

  return element;
};


