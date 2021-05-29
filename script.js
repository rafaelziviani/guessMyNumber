'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // when there's no input
  if (!guess) {
    document.querySelector('.message').textContent = 'Type a number! 👈';
    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number! ';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    //when guess it too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    } //when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// first we selected the button "check" created in HTML e CSS using the document.querySelector, this button has a class, thats why we use dot . if it was an ID we should have used #
// second, we addEventListener to attach an event handler, which is something we do to let us know when something happens there, like a mouse click or hovering over the button.
// third, we created a function to log the number that was typed in the box to the console so we can see the value that the user typed in - this is a function expression, we can assign that to a variable if we want. We passed the function directly into the addEventListener method.
// const firstGame = function() {console.log(23);} that's when you assign a function to a variable, when you create a function inside a method is when you're doing it directly
// line 9 and 10 have two arguments, the first one is the click event button, the second one is the function value and this function contains the code we want to execute whenever the event happens.
//we do not call this function anywhere, we only define the function here and pass it to the event handler, it's JS engine who will call this function as soon as the event happens, it will not be called immediately.
//you call a function using ()
//now instead of you doing it on the console, we are going to store the value to a variable so we can start to build up the game, it's the same thing, now the value is stored in the variable rather than just displaying in the console.
// when we get a value from the user, usually it's a string, so we have to convert it to number using the Number() method
// you have to guarantee that the user add a value
// we have to define the secret number outside the event handler otherwise every time you click the button you will change the secret number making it very hard to find out
//we could also have stored this score in the DOM, but then, we would not have that value in our code, eventually our application would not have a way to know the value the user typed in anyhow, so it's always good to keep a variable that holds the data in our code. this variable can also be called a state variable because this code is also part of the so called application state, which is all the data that's relevant to the application.
//score = score -1 = score-- which is the same as writing score-- you declared the variable up there initializing as 20
//it cannot be a const because a const is immutable, so you should use let since you're gonna be incrementing or decrementing the number

/*
document.querySelector('.message').textContent = 'Correct Number! ';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
*/
