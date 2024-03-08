import { createFinalElement } from '../views/finalPageView.js';
import { USER_INTERFACE_ID } from '../constants.js';

export const initFinalPage = (counter, questions) => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const finalPage = createFinalElement(counter, questions);
  userInterface.appendChild(finalPage);
};
