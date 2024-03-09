import { START_QUIZ_BUTTON_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */
export const createWelcomeElement = () => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h3>Welcome, stranger!</h3>
    <p>Welcome to our quiz. All questions here are dedicated to Netherlands.</p>
    <p>Press <b>Start quiz</b> to begin</p>
    <button id="${START_QUIZ_BUTTON_ID}">Start quiz</button>
  `;
  return element;
};
