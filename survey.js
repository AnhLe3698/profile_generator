'use strict';

const readline = require('readline');

// Initializing the in and out.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let questionsArray = [
  "What's your name? Nicknames are also acceptable :) \n",
  "What's an activity you like doing? \n",
  "What do you listen to while doing that? \n",
  "Which meal is your favourite (eg: dinner, brunch, etc.) \n",
  "What's your favourite thing to eat for that meal? \n",
  "Which sport is your absolute favourite? \n",
  "What is your superpower? In a few words, tell us what you are amazing at! \n"
];

let paragraphArray = [];
let resultingParagraph = "";

// new promise with each new .question()
const question = (theQuestion) => {
  return new Promise((resolve) => {
    rl.question(theQuestion, (answer) => {
      paragraphArray.push(answer.trim());
      resolve();
    });
  });
};

const main = async() => {
  // Create a sequence of promises equal to the amount of questions asked.
  for (let n = 0; n < questionsArray.length; n++) {
    await question(questionsArray[n]);
  }
  // Adding all the user inputs in to a single paragraph string
  resultingParagraph += `Hello my name is ${paragraphArray[0]}. `;
  resultingParagraph += `I enjoy doing the following activity: ${paragraphArray[1]}. `;
  resultingParagraph += `And listen to ${paragraphArray[2]} while doing it. `;
  resultingParagraph += `My favorite meal is ${paragraphArray[3]}, and my favorite thing to eat in that meal is ${paragraphArray[4]}. `;
  resultingParagraph += `My absolute favorite sport is ${paragraphArray[5]}. `;
  resultingParagraph += `I am amazing at ${paragraphArray[5]}.`;
  console.log(resultingParagraph);
  rl.close();
};

main();