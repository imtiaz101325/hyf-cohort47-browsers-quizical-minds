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

export const createRestartButton = () => {
  const element = document.createElement('button');
  element.id = 'restart-quiz-button';
  element.innerText = 'Restart Quiz';

  return element;
};
