// Pseudocode
//GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

// variables/arrays
var questions = [
    {
        question: "What house is Harry Potter in?",
        options: ["Slytherin", "Gryffindor", "Ravenclaw", "Hufflepuff"],
        answer: "Gryffindor",
    }
    
    ,{
        question: "What is the town called that is near Hogwarts?",
        options: ["Hogfarts", "Hide-away Hallow", "Hogsmead", "Hoggle"],
        answer: "Hogsmead",
    }
    
    ,{ question: "Who is the Greatest Wizard of All?",
      options: ["Neville Longbottom", "Albus Dumbledor", "Gilderoy Lockhart", "Seamus Finnigan"],
      answer: "Albus Dumbledor",

    }
];
console.log(questions);

// function to start quiz
// function startQuiz() {
//     let qButton = document.getElementsByClassName(".btn");
//     qButton.addEventListener("click", "");

//     return startQuiz;
// }
// console.log(startQuiz);
// // start button to start quiz(function) - triggers timer to begin from 75 seconds, setInterval / clearInterval timer
// function setTime() {
//     // Sets interval in variable
//     var timerInterval = setInterval(function() {
//       secondsLeft--;
//       timeEl.textContent = secondsLeft + " Time Left:";
  
//       if(secondsLeft === 0) {
//         clearInterval(timerInterval);
//         sendMessage();
//       }
  
//     }, 1000);
//   }

// removes intro text/section and displays random questions -- new text here?

// function if/else for adding up points/ to check for right answer 
//  -eventListener for all button clicks
//  -subtract seconds when correct answer and prompt incorrect
//  -add 1 point if correct and prompt correct

// EVENT LISTENERS
//  1) Start Quiz
//  2) answer boolean?
//  3) last question -- all done / results MAYBE
//  4) enter intitials, "submit"
//  5) "go back" or "clear highscore"
//  6) if "clear highscores" then "go back" or "clear highscore"
// display correct / wrong message 

