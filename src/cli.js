import readLineSync from 'readline-sync';

export default function greeting() {
  console.log('Welcome to the Brain Games!');
  let userName = readLineSync.question('May I have your name? ');
  while (1) {
    if (userName === '') {
      userName = readLineSync.question('There"s no game without a name, so say your name! ');
    } else {
      console.log(`Hello, ${userName}!`);
      break;
    }
  }
}
