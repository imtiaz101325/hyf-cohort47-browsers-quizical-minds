/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  // the questions in the quiz
  questions: [
    {
      text: 'What is the capital of the Netherlands?',
      answers: {
        a: 'Amsterdam',
        b: 'Rotterdam',
        c: 'The Hague',
        d: 'Utrecht',
      },
      correct: 'a',
      selected: null,
    },
    {
      text:
        'Which Dutch city is famous for its canals, historic houses, and vibrant cultural scene?',
      answers: {
        a: 'Rotterdam',
        b: 'Utrecht',
        c: 'Amsterdam',
        d: 'The Hague',
      },
      correct: 'c',
      selected: null,
    },
    {
      text: 'Who is the king of the Netherlands?',
      answers: {
        a: 'Willem-Alexander',
        b: 'Beatrix',
        c: 'Juliana',
        d: 'Wilhelmina',
      },
      correct: 'a',
      selected: null,
    },
    {
      text:
        "Which Dutch artist painted 'The Night Watch,' one of the most famous works in the Rijksmuseum in Amsterdam?",
      answers: {
        a: 'Vincent van Gogh',
        b: 'Rembrandt',
        c: 'Piet Mondrian',
        d: 'Johannes Vermeer',
      },
      correct: 'b',
      selected: null,
    },
    {
      text: 'What is the currency of the Netherlands?',
      answers: {
        a: 'Euro',
        b: 'Guilder',
        c: 'Franc',
        d: 'Mark',
      },
      correct: 'a',
      selected: null,
    },
    {
      text: 'What is the national symbol of the Netherlands?',
      answers: {
        a: 'Tulip',
        b: 'Wooden shoe (klomp)',
        c: 'Windmill',
        d: 'Lion',
      },
      correct: 'c',
      selected: null,
    },
    {
      text:
        'Which Dutch scientist is famous for his contributions to microbiology, including the discovery of bacteria and microscopy techniques?',
      answers: {
        a: 'Antonie van Leeuwenhoek',
        b: 'Christiaan Huygens',
        c: 'René Descartes',
        d: 'Johannes Kepler',
      },
      correct: 'a',
      selected: null,
    },
    {
      text: 'The Dutch Royal Family belongs to which dynasty?',
      answers: {
        a: 'Bourbon',
        b: 'Habsburg',
        c: 'Orange-Nassau',
        d: 'Tudor',
      },
      correct: 'c',
      selected: null,
    },
    {
      text:
        'What is the name of the Dutch parliamentary body responsible for making and passing laws?',
      answers: {
        a: 'Royal Council',
        b: 'Parliament of the Netherlands',
        c: 'States General',
        d: 'Dutch Congress',
      },
      correct: 'c',
      selected: null,
    },
    {
      text: 'What are the colors of the Dutch flag??',
      answers: {
        a: 'Blue, white, red',
        b: ' Red, white, blue',
        c: 'Green, white, orange',
        d: 'Orange, blue, yellow',
      },
      correct: 'b',
      selected: null,
    },
  ],
};
