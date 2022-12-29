import runGame, { randomInteger } from '../index.js';

const description = 'What number is missing in the progression?';
function gameQuestionAndAnswer() {
  const progressionStep = randomInteger(2, 10);
  const progression = [];
  const placeOfStoppingProgression = randomInteger(6, 16);
  const skipPlace = randomInteger(1, placeOfStoppingProgression);
  let answer;
  let initialValue = randomInteger(0, 100);
  for (let i = 0; i <= 16; i += 1) {
    if (i === skipPlace) {
      progression.push('...');
      answer = initialValue;
      initialValue += progressionStep;
    } else if (i === placeOfStoppingProgression) {
      break;
    } else {
      progression.push(initialValue);
      initialValue += progressionStep;
    }
  }
  const question = progression.join(' ');
  return [question, String(answer)];
}

const progression = () => {
  runGame(description, gameQuestionAndAnswer);
};

export default progression;
