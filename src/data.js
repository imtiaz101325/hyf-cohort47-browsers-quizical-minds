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
      text: 'What are the different ways to declare a JS variable?',
      answers: {
        a: 'constant, let, variable',
        b: 'var, const, let, function',
        c: 'var, let, const',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      text: 'What does `typeof` do?',
      answers: {
        a: 'changes the type of a primitive value',
        b: 'returns a string describing the type of a value',
        c: 'determines if a value is primitive',
        d: 'can tell the difference between arrays and objects',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: 'MDN',
          href:
            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
        },
      ],
    },
    // Add more questions here
    {
      text:
        '	Which of the following laws is associated with the heating effect of electric current ?',
      answers: {
        a: "Joule's law",
        b: "Ohm's law ",
        c: "Faraday's law ",
        d: "Newton's law ",
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      text:
        'Who demonstrated that objects of different masses would reach the ground together when dropped from the same height?',
      answers: {
        a: 'Isaac Newton',
        b: 'Archimedes ',
        c: 'Robert Boyle ',
        d: 'Galileo Galilei ',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      text: '	A body at rest can have ?',
      answers: {
        a: 'speed',
        b: 'velocity',
        c: 'momentum',
        d: 'Energy',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      text: '	The pH of pure water is ?',
      answers: {
        a: '2',
        b: '6',
        c: '7',
        d: '8',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      text:
        'What is the ability of a metal to be drawn into thin wires called ?',
      answers: {
        a: 'Ductility',
        b: 'Sonorous ',
        c: 'Malleability',
        d: 'Intractability',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      text:
        'The sex of the children will be determined by what they inherit from the ?',
      answers: {
        a: 'nature',
        b: 'father',
        c: 'mother',
        d: 'mother and father',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      text: 'If the mass of a solid is doubled, its density ?',
      answers: {
        a: 'becomes two times',
        b: 'becomes half ',
        c: 'remains unchanged',
        d: 'becomes four times',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
    {
      text: 'Fats and oils become rancid because of ?',
      answers: {
        a: 'transpiration ',
        b: 'reduction ',
        c: 'oxidation',
        d: 'corrosion ',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/variables',
        },
        {
          text: 'Tyler McGinnis',
          href: 'https://ui.dev/var-let-const/',
        },
      ],
    },
  ],
};
