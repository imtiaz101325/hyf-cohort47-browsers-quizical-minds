/**
 * Create a full question element
 * @returns {Element}
 */
export const createResultMessage = () => {
  const element = document.createElement('div');
  element.classList.add('results-page');

  return element;
};

export const createRestartButton = () => {
  const element = document.createElement('button');
  element.id = 'restart-quiz-button';
  element.innerText = 'Restart Quiz';
  
  return element;
};
