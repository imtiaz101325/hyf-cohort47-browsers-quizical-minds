import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.classList.add('w-container');

  element.innerHTML = String.raw`
    <div class="welcome-title">
      <h1>Welcome to Dutch Inburgering exam!</h1>
      <p>You will have 15 questions to answer</p>
    </div>
    <button id="${START_QUIZ_BUTTON_ID}">start quiz</button>
  `;
  
  return element;
};
