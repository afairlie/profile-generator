const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const surveyAnswers = {};

rl.question("What's your name? Nicknames are also acceptable :) ", (input) => {
  surveyAnswers.name = input;
  
  rl.question("What's an activity you like doing? ", (input) => {
    surveyAnswers.activity = input;

    rl.question("What do you listen to while doing that? ", (input) => {
      surveyAnswers.music = input;

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (input) => {
        surveyAnswers.meal = input;

        rl.question("Which sport is your absolute favourite? ", (input) => {
          surveyAnswers.sport = input;
            
          rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (input) => {
            surveyAnswers.superPower = input;
            let a = surveyAnswers;
            console.log(`My name is ${a.name}, my favourite activity is ${a.activity} and I listen to ${a.music} while I do it. I LOVE to eat ${a.meal}. You can catch me ${a.sport} when I'm feeling sporty, and my secret power is ${a.superPower}`)
            rl.close();
          })
        })
      })
    })
  })
});

// PUT IN INNER-MOST QUESTION!
