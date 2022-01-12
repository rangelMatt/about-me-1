'use strict';

//console.log ('Hellllooooo mikey');

let user = prompt('Hello, what is your name?').toUpperCase();

alert(`WELCOME ${user}!! Please enjoy this special guessing game to get to know a bit about me!`);

//Ask user five 'yes' or 'no' questions about me and let them know if they are correct
//Question 1:COOKIES

let answerCookies = prompt('Do I love cookies?').toLowerCase();

if (answerCookies === 'yes' || answerCookies === 'y' || answerCookies === 'ye' || answerCookies === 'ya'|| answerCookies === 'yerp') {
// console.log('Heck yes I do. +10xp');
  alert('Heck yes I do. +10xp');
}
else if (answerCookies === 'no'|| answerCookies === 'n' || answerCookies === 'na' || answerCookies === 'nope' || answerCookies === 'noo'|| answerCookies === 'heck no!') {
  // console.log('that answer is....');
  // console.log('VERY INCORRECT! I love cookies -10xp');
  alert('that answer is....');
  alert('VERY INCORRECT! I love cookies -10xp');
} else {
  // console.log('Please stick to the rules, PAL -10,000xp');
  alert('Please stick to the rules, PAL -10,000xp');
}

//Question 2:KICKFLIP
let answerKickflip = prompt('Can I do a kickflip?').toLowerCase();

if (answerKickflip === 'yes' || answerKickflip === 'y' || answerKickflip === 'ye' || answerKickflip === 'ya'|| answerKickflip === 'yerp') {
  // console.log('YES HE FLIPPIN` CAN +10xp');
  alert('YES I FLIPPIN` CAN +10xp');
}
else if (answerKickflip === 'no'|| answerKickflip === 'n' || answerKickflip === 'na' || answerKickflip === 'nope' || answerKickflip === 'noo'|| answerKickflip === 'heck no!') {
  // console.log('very INCORRECT, this is my fav trick -10xp');
  alert('very INCORRECT, in this is my fav trick -10xp');
} else {
  // console.log('Please stick to the rules, PAL -10,000xp');
  alert('Please stick to the rules, PAL -10,000xp');
}

//Question 3: SHREK
let answerGetShrecked = prompt('Do I think Shrek is rad?').toLowerCase();

if (answerGetShrecked === 'yes' || answerGetShrecked === 'y' || answerGetShrecked === 'ye' || answerGetShrecked === 'ya'|| answerGetShrecked === 'yerp') {
  // console.log('ofc I do. +10xp');
  alert('ofc I do. +10xp');
}
else if (answerGetShrecked === 'no'|| answerGetShrecked === 'n' || answerGetShrecked === 'na' || answerGetShrecked === 'nope' || answerGetShrecked === 'noo'|| answerGetShrecked === 'heck no!') {
  // console.log('you STILL haven`t noticed all the answers are yes?? I love Shrek. -10xp');
  alert('you STILL haven`t noticed all the answers are yes?? I love Shrek. -10xp');
} else {
  // console.log('Please stick to the rules, PAL -10,000xp');
  alert('Please stick to the rules, PAL -10,000xp');
}

//Question 4: SEATTLE
let answerSeattle = prompt('Have I been to Seattle?').toLowerCase();

if (answerSeattle === 'yes' || answerSeattle === 'y' || answerSeattle === 'ye' || answerSeattle === 'ya'|| answerSeattle === 'yerp') {
  // console.log('Not yet! -10xp');
  alert('Not yet! -10xp');
}
else if (answerSeattle === 'no'|| answerSeattle === 'n' || answerSeattle === 'na' || answerSeattle === 'nope' || answerSeattle === 'noo'|| answerSeattle === 'heck no!') {
  // console.log('CORRECT! Hopefully someday soon though! +10xp');
  alert('CORRECT! Hopefully someday soon though! +10xp');
} else {
  // console.log('Please stick to the rules, PAL -10,000xp');
  alert('Please stick to the rules, PAL -10,000xp');
}

//Question 5: GOTTFRIED
let answerGottfried = prompt('Have I had drinks with Gilbert Gottfried? (the voice behind Iago from OG Alladin,, and SO much more)').toLowerCase();

if (answerGottfried === 'yes' || answerGottfried === 'y' || answerGottfried === 'ye' || answerGottfried === 'ya'|| answerGottfried === 'yerp') {
  // console.log('NO, I have not yet :/ soon hopefully tho +10xp anyways for believing in me');
  alert('NO, I have not yet :/ soon hopefully tho +10xp anyways for believing in me');
}
else if (answerGottfried === 'no'|| answerGottfried === 'n' || answerGottfried === 'na' || answerGottfried === 'nope' || answerGottfried === 'noo'|| answerGottfried === 'heck no!') {
  // console.log('Unfortunately you`re correct :/ +10xp');
  alert('Unfortunately you`re correct :/ +10xp');
} else {
  // console.log('Please stick to the rules, PAL -10,000xp');
  alert('Please stick to the rules, PAL -10,000xp');
}

alert(`Thanks so much ${user} for participating! You now know that I love cookies, I love to kickflip, Shrek is awesome, I want to see Seattle, and meet the Gilb God. Here's a page with some more info about my life.`);
