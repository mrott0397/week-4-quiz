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
// object/array of questions and answers
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
const option2 = document.querySelector('#opt2');
const option3 = document.querySelector('#opt3');
const option4 = document.querySelector("#opt4");
const timerSection = document.querySelector('#timer');
var initialSelection = document.querySelector('.initial-selection');
var resultSelection = document.querySelector('.highscore');
var index = 0;
let timerInterval;
let timerCount = 30;
var answerBox = document.querySelector('.options');
var start = document.querySelector('#startBtn');
var finalDisplay = document.getElementById('finalscore-display');
var submitBtn = document.getElementById('submit');
var userInitial = document.getElementById('init');
var score = 0;
var initials;
var highscores = document.getElementById('finalscore');
var initial = [];

start.addEventListener("click", startQuiz);

function startQuiz() {
    introSection.classList.add('hide');
    questionSection.classList.remove('hide');
    runQuestions();
    startTime();
}
function runQuestions() {
    if (index == questions.length) {
        endQuiz();
        return;
    }
    title.textContent = questions[index].question;
    option1.textContent = questions[index].options[0];
    option2.textContent = questions[index].options[1];
    option3.textContent = questions[index].options[2];
    option4.textContent = questions[index].options[3];
    index++;
};

// adding click to go to next page--
option1.addEventListener('click', function(event) {
    let chosen = event.target.textContent;
    if (index != questions.length && chosen == questions[index-1].answer) {
        console.log("correct");
    } else {
        timerCount = timerCount - 5;
        console.log("wrong");
    }
    runQuestions();

    }
)
option2.addEventListener('click', function(event) {
    let chosen = event.target.textContent;

    if (index != questions.length && chosen == questions[index-1].answer) {
        console.log("correct");
    } else {
        timerCount = timerCount - 5;
        console.log("wrong");
    }
    runQuestions();

    }
)
option3.addEventListener('click', function(event) {
    let chosen = event.target.textContent;
   
    if (index != questions.length && chosen == questions[index-1].answer) {
        console.log("correct");
    } else {
        timerCount = timerCount - 5;
        console.log("wrong");
    }
    runQuestions();

    }
)
option4.addEventListener('click', function(event) {
    let chosen = event.target.textContent;
  
    if (index != questions.length && chosen == questions[index-1].answer) {
        console.log("correct");
    } else {
        timerCount = timerCount - 5;
        console.log("wrong");
    }
    runQuestions();

    }
)



function startTime() {
    // Sets interval in variable
     timerInterval = setInterval(function() {
      timerCount--;
      timerSection.textContent = "Time Left: " + timerCount;
  
      if(timerCount <= 0) {
       endQuiz();
      }
  
    }, 1000);
  }

  function sendMessage() {
    timerCount.textContent = ('Time is up!');
  }

  function endQuiz() {
    sendMessage();
    questionSection.classList.add('hide');
    initialSelection.classList.remove('hide');
    score = timerCount;
    finalDisplay.textContent = score;
    
    clearInterval(timerInterval);
    showHighscore();
  }

// event.listener for 'submit' 
  submitBtn.addEventListener('click', function(event){
    initialSelection.classList.add('hide');
    resultSelection.classList.remove('hide');
    initials = userInitial.value;
    score = timerCount;
    var userScore = document.getElementById('user-score');
    userScore.textContent = initials + score;
    var storedScore = JSON.parse(localStorage.getItem('highscores')) || [];
    var userHighscore = {
        user: initials, 
        score: score
    }
    storedScore.push(userHighscore);
    localStorage.setItem ('highscores', JSON.stringify (storedScore));
  })
 function showHighscore() {
    // Get stored initials from localStorage
    var allHighscores = document.getElementById('all-highscores');
    var storedInitials = JSON.parse(localStorage.getItem("highscores"));
    for (let index = 0; index < storedInitials.length; index++) {
        let element = storedInitials[index];
        console.log(element);
        // Render a new li for each todo
      var li = document.createElement("li");
      li.textContent = `Initials: ${element.user}  Score: ${element.score}`;
      allHighscores.appendChild(li);

    }
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



