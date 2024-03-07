/**
 * Create a score panel that is updated in real-time as user select right answers
 */
export const createScorePanel = (counter, answers) => {
    const element = document.createElement('div');
    element.classList.add('score-panel');
  
    element.innerHTML = String.raw`
      Correct answers: ${counter} of ${answers}
    `;
  
    return element;
  };