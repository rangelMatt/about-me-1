'use strict';

//console.log ('Hellllooooo mikey');

let user = prompt('Hello, what is your name?').toUpperCase();

alert(`WELCOME ${user}!! Please enjoy this special guessing game to get to know a bit about me!`);

//Ask user five 'yes' or 'no' questions about me and let them know if they are correct

let answerCookies = prompt('Do I love cookies?').toLowerCase();

if (answerCookies === 'yes' || answerCookies === 'y' || answerCookies === 'ye' || answerCookies === 'ya'|| answerCookies === 'yerp') {
  console.log('Heck yes I do. +10xp');
}
else if (answerCookies === 'no'|| answerCookies === 'n' || answerCookies === 'na' || answerCookies === 'nope' || answerCookies === 'noo'|| answerCookies === 'heck no!') {
  console.log('that answer is....');
  console.log('VERY INCORRECT! I love cookies &#128540;');
} else {
  console.log('Please stick to the rules, PAL');
}
