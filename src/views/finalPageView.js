/**
 * Create the final screen with users score
 */
export const createFinalElement = (counter, questions) => {
  const element = document.createElement('div');

  element.innerHTML = String.raw`
    <h1>You've finished the quiz.</h1>
    You answered ${counter} out of ${questions} questions correctly!
  `;
  return element;
};
