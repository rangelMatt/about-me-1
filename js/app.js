'use strict';

let yourCurrentXP = 0;
console.log (yourCurrentXP);

let user = prompt('Hello, what is your name?').toUpperCase();

alert(`WELCOME ${user}!! Please enjoy this special guessing game to get to know a bit about me!`);

//Ask user five 'yes' or 'no' questions about me and let them know if they are correct
//-----Question 1:COOKIES-----

function cookieAnswer(){

  let answerCookies = prompt('Do I love cookies?').toLowerCase();

  if (answerCookies === 'yes' || answerCookies === 'y' || answerCookies === 'ye' || answerCookies === 'ya'|| answerCookies === 'yerp') {
  
    alert('Heck yes I do. +1xp');
    yourCurrentXP++;
    console.log (yourCurrentXP);
    alert(`You have ${yourCurrentXP}XP.`);
  }
  else if (answerCookies === 'no'|| answerCookies === 'n' || answerCookies === 'na' || answerCookies === 'nope' || answerCookies === 'noo'|| answerCookies === 'heck no!') {
    alert('that answer is....');
    alert('VERY INCORRECT! I love cookies');
  } else {
  
    alert('Please stick to the rules, PAL ');
  }
}

cookieAnswer();


//------Question 2:KICKFLIP-----
function kickflipAnswer(){
  let answerKickflip = prompt('Can I do a kickflip?').toLowerCase();

  if (answerKickflip === 'yes' || answerKickflip === 'y' || answerKickflip === 'ye' || answerKickflip === 'ya'|| answerKickflip === 'yerp') {
    alert('YES I FLIPPIN` CAN +1xp');
    yourCurrentXP++;
    console.log (yourCurrentXP);
    alert(`You have ${yourCurrentXP}XP.`);
  }
  else if (answerKickflip === 'no'|| answerKickflip === 'n' || answerKickflip === 'na' || answerKickflip === 'nope' || answerKickflip === 'noo'|| answerKickflip === 'heck no!') {
    alert('very INCORRECT, in this is my fav trick ');
  } else {
    alert('Please stick to the rules, PAL ');
  }
}
kickflipAnswer();

//-----Question 3: SHREK-----
function getShreckedAnswer(){
  let answerGetShrecked = prompt('Do I think Shrek is rad?').toLowerCase();

  if (answerGetShrecked === 'yes' || answerGetShrecked === 'y' || answerGetShrecked === 'ye' || answerGetShrecked === 'ya'|| answerGetShrecked === 'yerp') {
  
    alert('ofc I do. +1xp ');
    yourCurrentXP++;
    console.log (yourCurrentXP);
    alert(`You have ${yourCurrentXP}XP.`);
  }
  else if (answerGetShrecked === 'no'|| answerGetShrecked === 'n' || answerGetShrecked === 'na' || answerGetShrecked === 'nope' || answerGetShrecked === 'noo'|| answerGetShrecked === 'heck no!') {
    alert('you STILL haven`t noticed all the answers are yes?? I love Shrek. ');
  } else {
    alert('Please stick to the rules, PAL ');
  }
}
getShreckedAnswer();

//-----Question 4: SEATTLE--------
function seattleAnswer(){
  let answerSeattle = prompt('Have I been to Seattle?').toLowerCase();

  if (answerSeattle === 'yes' || answerSeattle === 'y' || answerSeattle === 'ye' || answerSeattle === 'ya'|| answerSeattle === 'yerp') {
    alert('Not yet! ');
  }
  else if (answerSeattle === 'no'|| answerSeattle === 'n' || answerSeattle === 'na' || answerSeattle === 'nope' || answerSeattle === 'noo'|| answerSeattle === 'heck no!') {
    alert('CORRECT! Hopefully someday soon though! +1');
    yourCurrentXP++;
    console.log (yourCurrentXP);
    alert(`You have ${yourCurrentXP}XP.`);
  } else {
    alert('Please stick to the rules, PAL ');
  }
}
seattleAnswer();

//-----Question 5: GOTTFRIED-------
function gottfriedAnswer(){
  let answerGottfried = prompt('Have I had drinks with Gilbert Gottfried? (the voice behind Iago from OG Alladin,, and SO much more)').toLowerCase();

  if (answerGottfried === 'yes' || answerGottfried === 'y' || answerGottfried === 'ye' || answerGottfried === 'ya'|| answerGottfried === 'yerp') {
    alert('NO, I have not yet :/ thanks for believing in me');
  }
  else if (answerGottfried === 'no'|| answerGottfried === 'n' || answerGottfried === 'na' || answerGottfried === 'nope' || answerGottfried === 'noo'|| answerGottfried === 'heck no!') {
    alert('Unfortunately you`re correct :/ +1');
    yourCurrentXP++;
    console.log (yourCurrentXP);
    alert(`You have ${yourCurrentXP}XP.`);
  } else {
    alert('Please stick to the rules, PAL ');
  }
}
gottfriedAnswer();



//----Lab 03 Secret Number Guessing Game-----
function answerSecretNumber(){
  let correctAnswer = 2;
  let guesses = 4;
  
  while(guesses){
    let answerSix = prompt('Guess the correct number stored in my machine brain');
  
    if (parseInt(answerSix) === correctAnswer){
      alert('you are correct');
      break;
      //guesses = 0;
    } else if(answerSix > correctAnswer){
      alert('Too high');
      guesses--;
    }  else (answerSix < correctAnswer);{
      alert('Too low');
      guesses--;
    } if(guesses === 0){
      alert('Sorry no more guesses');
    }
  }
}
answerSecretNumber();



//----Question 7 on lab!!----
function arrayFunction(){
  let myArr = ['blue', 'black', 'pink','orange'];




  let attempts = 6;
  
  while(attempts){
    let answerSeven = prompt('What is one of my fav colors?');
    //pink
  
  
    for(let i=0; i < myArr.length; i++){
      if(answerSeven === myArr[i]){
        alert(`Yes ${answerSeven} is one of my favorite colors!`);
        attempts = 1;
        break;
      }
    }
  
    attempts--;
  
  
  }
}
arrayFunction();


alert(`Thanks so much ${user} for participating! You now know that I love cookies, I love to kickflip, Shrek is awesome, I want to see Seattle, and meet the Gilb God. Here's a page with some more info about my life.`);



// //Question 7 on lab!!
// let myArr = ['blue', 'black', 'pink','orange'];




// let attempts = 6;

// while(attempts){
//   let answerSeven = prompt('What is one of my fav colors?');
//   //pink


//   for(let i=0; i < myArr.length; i++){
//     if(answerSeven === myArr[i]){
//       alert(`Yes ${answerSeven} is one of my favorite colors!`);
//       attempts = 1;
//       break;
//     }
//   }

//   attempts--;


// }


//while loop to keep prompt if wrong --slow loop

//for loops are great to check if answer in array!!! -- fast loop


// //ask user a random open question
// let shrekAnswer = prompt('What was the name of the book that the original Shrek film was based off of?').toLowerCase();
// console.log(`user is guessing ${shrekAnswer} as the book that film Shrek was inspired by.`);

// //create array of different spellings of the novel 'Shrek' by William Steig as answer to question
// let filmShrekBookTookInspoFrom = ['shrek', 'shrek!', ' shrek', 'shrek! ','!shrek!'];

// if (shrekAnswer === filmShrekBookTookInspoFrom){
//   yourCurrentXP++;
//   console.log (yourCurrentXP);
//   alert(`You have ${yourCurrentXP}XP.`);

// } else{
//   alert('no that`s incorrect, please try again');
// }
// console.log (yourCurrentXP);
