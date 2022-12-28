import readLineSync from 'readline-sync';

let userName;
const totalNumberOfQuestions = 3;

function greeting() {
  console.log('Welcome to the Brain Games!');
  userName = readLineSync.question('May I have your name? ');
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  while (1) {
    if (userName === '') {
      userName = readLineSync.question('There"s no game without a name, so say your name!');
    } else {
      console.log(`Hello, ${userName}!\n${gameRules}`);
      break;
    }
  }
}

function randomInteger(min, max) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function checksTheParityOfNumber(num) {
  return num % 2 === 0 ? 'yes' : 'no';
}

function getAnswerСorrectness(num, answer) {
  if (checksTheParityOfNumber(num) === answer.toLowerCase()) {
    return true;
  }
  return false;
}

function getsTheReverseAnswer(answer) {
  if (answer === 'yes') {
    return 'no';
  }
  return 'yes';
}

export default function brainEven() {
  greeting();
  for (let currentQuestionNumber = 1;
    currentQuestionNumber <= totalNumberOfQuestions;
    currentQuestionNumber += 1) {
    const randomNumber = randomInteger(1, 1000);
    const playerAnswer = readLineSync.question(`Question: ${randomNumber}\nYou answer: `);
    if (getAnswerСorrectness(randomNumber, playerAnswer) === true
    && currentQuestionNumber === totalNumberOfQuestions
    ) {
      console.log(`Correct!\nCongladurations, ${userName}!`);
    } else if (getAnswerСorrectness(randomNumber, playerAnswer)) {
      console.log('Correct!');
    } else if (!getAnswerСorrectness(randomNumber, playerAnswer)) {
      const reverseAnswer = getsTheReverseAnswer(playerAnswer);
      console.log(`"${playerAnswer}" is a wrong answer. Correct answer is "${reverseAnswer}".\nLet's try again, ${userName}!`);
      break;
    }
  }
}
