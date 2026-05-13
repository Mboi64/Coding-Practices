// let questions = [
//   {
//     category: "Memes",
//     question: "What is 9 + 10?",
//     choices: ["A. 21", "B. 19", "C. 41"],
//     answer: "A. 21",
//   },
//   {
//     category: "Shows",
//     question: "Who is the main character of DBZ?",
//     choices: ["A. Sonic", "B. Son Wukong", "C. Son Goku"],
//     answer: "C. Son Goku",
//   },
//   {
//     category: "Cool",
//     question: "Why was 6 afraid of 7?",
//     choices: ["A. Cuz 7 ate 9", "B. Cuz seven 8 9", "C. Cuz 7 8 9"],
//     answer: "A. Cuz 7 ate 9",
//   },
//   {
//     category: "Another one",
//     question: "What is the treasure Luffy is searching for?",
//     choices: ["A. JoyBoy", "B. The One Piece", "C. Food"],
//     answer: "B. The One Piece",
//   },
//   {
//     category: "Food",
//     question: "What would be a gamer's meal?",
//     choices: ["A. Doritos", "B. Steak", "C. None"],
//     answer: "A. Doritos",
//   },
// ];

// function getRandomQuestion(question) {
//   const random = Math.floor(Math.random() * questions.length);
//   return question[random];
// }

// function getRandomComputerChoice(choices) {
//   const randomChoice = Math.floor(Math.random() * choices.length);
//   return choices[randomChoice];
// }

// function getResults(questions, choices) {
//   if (questions?.answer === choices) {
//     return "The computer's choice is correct!";
//   } else {
//     return `The computer's choice is wrong. The correct answer is: ${questions.answer}`;
//   }
// }

const questions = [
  {
    category: "Movies",
    question: "Which movie won an oscar for best animated film?",
    choice: ["A. The Boss Baby", "B. Puss in Boots: The Last Wish", "C. Rango"],
    answer: "C. Rango"
  }, {
    category: "Anime Ball",
    question: "Which anime has the MOST reference (from this selection) throughout media?",
    choice: ["A. Akira Slide", "B. Naruto Run", "C. Kamehameha Wave"],
    answer: "A. Akira Slide"
  }, {
    category: "Social Media",
    question: "What was the most subbed YouTube channel in 2020?",
    choice: ["A. Pewdiepie", "B. T-Series", "C. Dude Perfect"],
    answer: "B. T-Series"
  }, {
    category: "People",
    question: "This person hides food every where while filming, they even have themself eating a snack on a very popular film!",
    choice: ["A. Robert Downey Jr.", "B. Tom Hanks", "C. Tim Allen"],
    answer: "A. Robert Downey Jr."
  }, {
    category: "Refrences",
    question: "Quote: \"Think of a Big Black Man chasing you\"",
    choice: ["A. SAO Abridge", "B. Golden Boy", "C. Ghost Stories"],
    answer: "C. Ghost Stories"
  }
];
let random = Math.floor(Math.random() * (5));

// Random Question
const getRandomQuestion = (questions) => {
  return questions[random].question;
}

console.log(getRandomQuestion())

// Random Computer Choice
const getRandomComputerChoice = (questions) => {
  let randomChoice = Math.floor(Math.random() * (3));
  return questions[random].choice[randomChoice];
}

console.log(getRandomComputerChoice())

let randomQuestion = getRandomQuestion();
let randomAnswer = getRandomComputerChoice();

// Gets Results
const getResults = (randomQuestion, randomAnswer) => {
  let result = "";
  if (randomAnswer == questions?.answer) {
    result = "The computer's choice is correct!"
  } else {
    result = `The computer's choice is wrong. The correct answer is: ${questions[random].answer}`
  }
  return result;
}

console.log(getResults())