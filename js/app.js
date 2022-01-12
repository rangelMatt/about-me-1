'use strict';

console.log ('Hellllooooo mikey');

let user = prompt('What ur name');

alert(`welcome ${user}`);

let answerOne = prompt('Do you have a daughter?').toLowerCase;


//spelled out version
//let normalizedAnswerOne = answerOne.toLowerCase();

if (answerOne === 'yes' || answerOne === 'y') {
  console.log('yes');
} else if (answerOne === 'no'|| answerOne === 'n') {
  console.log('no');
} else {
  console.log('follow instructions');
}
