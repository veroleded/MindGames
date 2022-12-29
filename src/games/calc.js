import runGame, { randomInteger } from '../index.js';

const description = 'What is the result of the expression?';

const getQuestinonAndCorrectAnswer = () => {
  const operators = ['+', '-', '*'];
  const randomNum1 = randomInteger(0, 10);
  const randomNum2 = randomInteger(0, 10);
  const randomOperator = operators[randomInteger(0, 2)];
  const question = `${randomNum1} ${randomOperator} ${randomNum2}`;
  let answer;
  switch (randomOperator) {
    case '+':
      answer = randomNum1 + randomNum2;
      break;
    case '-':
      answer = randomNum1 - randomNum2;
      break;
    case '*':
      answer = randomNum1 * randomNum2;
      break;
    default:
      answer = 'unknown';
  }
  return [question, String(answer)];
};

export default function calc() {
  runGame(description, getQuestinonAndCorrectAnswer);
}
