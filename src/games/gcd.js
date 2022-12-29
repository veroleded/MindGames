import runGame, { randomInteger } from '../index.js';

function getGcd(numOne, numTwo) {
  let num1 = numOne;
  let num2 = numTwo;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  return num1 === 0 ? num2 : num1;
}

const description = 'Find the greatest common divisor of given numbers.';

function gameQuestionAndAnswer() {
  const ramdomNuber1 = randomInteger(1, 100);
  const ramdomNuber2 = randomInteger(1, 100);
  const question = `${ramdomNuber1} ${ramdomNuber2}`;
  const answer = getGcd(ramdomNuber1, ramdomNuber2);
  return [question, String(answer)];
}

const gcd = () => {
  runGame(description, gameQuestionAndAnswer);
};
export default gcd;
