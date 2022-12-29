import runGame, { randomInteger } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getQuestinonAndCorrectAnswer = () => {
  const question = randomInteger(1, 100);
  let answer = 'yes';
  for (let i = 2; i < Math.round(question / 2); i += 1) {
    if (question % i === 0) {
      answer = 'no';
      break;
    }
  }
  return [question, answer];
};

function isPrime() {
  runGame(description, getQuestinonAndCorrectAnswer);
}
export default isPrime;
