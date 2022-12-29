import readLineSync from 'readline-sync';

const runGame = (description, gameQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  let userName = readLineSync.question('May I have your name? ');
  while (userName === '') {
    userName = readLineSync.question('There"s no game without a name, so say your name! ');
  }
  console.log(`Hello, ${userName}!\n${description}`);
  const totalNumberOfQuestions = 3;
  for (let numberOfQuestion = 1;
    numberOfQuestion <= totalNumberOfQuestions;
    numberOfQuestion += 1) {
    const [question, correctAnswer] = gameQuestionAndAnswer();
    const playerAnswer = readLineSync.question(`Question: ${question}\nYour answer: `);
    if (playerAnswer === correctAnswer) {
      if (numberOfQuestion === totalNumberOfQuestions) {
        console.log(`Correct!\nCongladurations, ${userName}!`);
      } else {
        console.log('Correct!');
      }
    } else {
      console.log(`"${playerAnswer}" is a wrong answer. Correct answer is "${correctAnswer}".\nLet's try again, ${userName}!`);
      break;
    }
  }
};

export default runGame;
