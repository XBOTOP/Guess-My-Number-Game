'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// document.querySelector('.number').textContent = secretNumber;
const displayMess = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMess('No number!🤣');
    document.querySelector('.message').style.color = '#000000';
    document.querySelector('body').style.backgroundColor = '#25fde9';
  } else if (guess > 20) {
    displayMess('PICK A NUMBER BTW 1-20 PLS😒');
    document.querySelector('body').style.backgroundColor = '#25fde9';
    document.querySelector('.message').style.color = '#000000';
  } else if (guess < 0) {
    displayMess('wtf bro😒');
    document.querySelector('body').style.backgroundColor = '#25fde9';
    document.querySelector('.message').style.color = '#000000';
  } else if (guess === secretNumber) {
    displayMess('Correct Number!💋❤');

    document.querySelector('body').style.backgroundColor = '#21b327';

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.message').style.color = '#000000';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMess(guess > secretNumber ? 'too high!' : 'too low!');
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor =
        guess > secretNumber ? '#0000FF' : '#FFA500';
      document.querySelector('.message').style.color = '#000000';
    } else {
      displayMess('RLY... U LOST BRO');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FF0000';
      document.querySelector('.message').style.color = '#000000';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  displayMess('Start guessing 🤷‍♂️');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
});
