var startBtn = document.getElementById("start-quiz");
var answerBtn = document.getElementById("button-option");
var questionText = document.getElementById('question-ask');

var timer = 120;
var countDown;
var a1 = document.getElementById("ans1");
var a2 = document.getElementById("ans2");
var a3 = document.getElementById("ans3");
var a4 = document.getElementById("ans4");



let currentIndex = 0;
var score = 0;

var questions = [
    {
      question: "Commonly used data types DO NOT include:",
      choices: [
        {text: "strings", correct: false},
        {text: "booleans", correct: false},
        {text: "alerts", correct: true},
        {text: "numbers", correct: false},
    ]          
    },

    {
      question: "The condition in an if / else statement is enclosed within ____.",
      choices: [ 
        {text: "quotes", correct: false},
        {text: "curly brakcets", correct: false},
        {text: "parentheses", correct: true},
        {text: "square brackets", correct: false}, 
      ]
    },

    {
      question: "Arrays in JavaScript can be used to store ____.",
      choices: [
        {text: "numbers and strings", correct: false},
        {text: "other arrays", correct: false},
        {text: "booleans", correct: false},
        {text: "all of the above", correct: true},
      ]
    },

    {
      question: "String values must be enclosed within ____ when being assigned to variables.",
      choices: [
        {text: "commas", correct: false},
        {text: "curly brackets", correct: false},
        {text: "quotes", correct: true},
        {text: "parentheses", correct: false},
      ]
    },

    {
      question: "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: [
        {text: "console.log", correct: true},
        {text: "JavaScript", correct: false},
        {text: "terminal/bash", correct: false},
        {text: "for loops", correct: false},
      ]
    }
  ];

  startBtn.addEventListener('click', startQuiz);

  function startQuiz() {
    startBtn.classList.add("hide");
    countDown = setInterval(timer, 1000);
    answerBtn.classList.remove("hide");
    currentIndex = 0;
    questionText.innerHTML = questions[currentIndex].question;

    ans1.addEventListener("click", chooseAnswer);
    ans2.addEventListener("click", chooseAnswer);
    ans3.addEventListener("click", chooseAnswer);
    ans4.addEventListener("click", chooseAnswer);

  }
