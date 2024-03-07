import { USER_INTERFACE_ID } from '../constants.js';
import { quizData } from '../data.js';
import { initWelcomePage } from '../pages/welcomePage.js';


export const showResultPage = () => {
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.innerHTML = '';

    const totalPoints = 15;

    const resultMessage = document.createElement('div');
    resultMessage.classList.add('results-page');

    if (quizData.score < 5) {
        resultMessage.innerText = `Not bad. You earned ${quizData.score} points out of ${totalPoints} points.`;
    } else if (quizData.score >= 5 && quizData.score <= 10) {
        resultMessage.innerText = `Good job! You earned ${quizData.score} points out of ${totalPoints} points.`;
    } else {
        resultMessage.innerText = `Excellent! You earned ${quizData.score} points out of ${totalPoints} points.`;
    }

    // Restart button
    const restartButton = document.createElement('button');
    restartButton.innerText = 'Restart Quiz';
    restartButton.addEventListener('click', restartQuiz);

    userInterface.appendChild(resultMessage);
    userInterface.appendChild(restartButton);
};

const restartQuiz = () => {
    // Reset the quiz data and start a new quiz
    quizData.currentQuestionIndex = 0;
    quizData.score = 0;
    quizData.questionsTracker = [];
    localStorage.clear();

    initWelcomePage();
};