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

// * Prompted to start the quiz by clicking a button - event listener
// array of questions and answers
const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<script>", "<javaScript>", "<js>", "<scripting>"],
        answer: "<script>",
    },
    
    {
       question: "How do you write an array?",
        options: ["With []", "With {}", "With ()", "With <>"],
        answer: "With []",
    },
    
    { question: "How can we view javaScript in the webpage??",
      options: ["Not sure", "Dev Chrome", "Google", "It shows automatically"],
      answer: "Dev Chrome",

    }
];
console.log(questions);
const introSection = document.querySelector('.intro-section');
const questionSection = document.querySelector('.question-section');
const title = document.querySelector('#questionTitle');
const option1 = document.querySelector('#opt1');
const option2 = document.querySelector('opt2');
const option3 = document.querySelector('#opt3');

var initialSelection = document.querySelector('.inistial-selection');
var resultSelection = document.querySelector('.highscore');
var index = 0;

var start = document.querySelector('#startBtn');

start.addEventListener("click", startQuiz);

function startQuiz() {
    introSection.classList.add('hide');
    questionSection.classList.remove('hide');
    runQuestions();
}
function runQuestions() {
    title.textContent = questions[index].question;
    option1.textContent = questions[index].options[0];
    option2.textContent = questions[index].options[1];
    option3.textContent = questions[index].options[2];
    
}

// * I will be given a specified amount of time to answer all the questions in the quiz
// * I will be presented with the first question
// * I will be presented with the options answers
// * When I answer correctly ther quiz should move to the next question
// * When I answer a question incorrectly 10 seconds should be deducted from the timer
// * I'm alerted if I answered the question correctly or incorrectly
// * The other questions will not display when the other questions are presented
// * I want my score tallied and displayed after all the questions were answered
// * I will be prompted to input my initials when the game is over
// * I'll be prompted to clear my score or play again
// */

// const startButton = document.getElementById('startBtn');
// const timer = document.getElementById('timer');
// const questionSelection = document.getElementById('qestionTitle');
// const answerOptions = document.getElementsByClassName('options');



// function to start quiz
// function startQuiz() {
//     let qButton = document.getElementById("startbtn");
//     qButton.addEventListener("click", "");

//     return startQuiz;
// }
// console.log(startQuiz);
// // start button to start quiz(function) - triggers timer to begin from 75 seconds, setInterval / clearInterval timer
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " Time Left:";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
  }

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

