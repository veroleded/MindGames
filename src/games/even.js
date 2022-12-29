import runGame, { randomInteger } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestinonAndCorrectAnswer = () => {
  const question = randomInteger(1, 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default function brainEven() {
  runGame(description, getQuestinonAndCorrectAnswer);
}
