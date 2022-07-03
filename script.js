var startBtn = document.getElementById("start-quiz");
var answerBtn = document.getElementById("answer-buttons");
var questionText = document.getElementById('question-ask');
var timerCount = 120;
var countDown;
var a1 = document.getElementById("ans1");
var a2 = document.getElementById("ans2");
// var a3 = document.getElementById("ans3");
// var a4 = document.getElementById("ans4");
var timerEl = document.getElementsByClass("timer-count");



let currentIndex = 0;
var score = 0;

var questions = [
    {
      question: "Commonly used data types DO NOT include:",
      choices: [
        // {text: "strings", correct: false},
        // {text: "booleans", correct: false},
        {text: "alerts", correct: true},
        {text: "numbers", correct: false},
    ]          
    },

    {
      question: "The condition in an if / else statement is enclosed within ____.",
      choices: [ 
        // {text: "quotes", correct: false},
        // {text: "curly brakcets", correct: false},
        {text: "parentheses", correct: true},
        {text: "square brackets", correct: false}, 
      ]
    },

    {
      question: "Arrays in JavaScript can be used to store ____.",
      choices: [
        {text: "numbers and strings, other arrays, booleans", correct: true},
        {text: "styles", correct: false},
        // {text: "booleans", correct: false},
        // {text: "all of the above", correct: true},
      ]
    },

    {
      question: "String values must be enclosed within ____ when being assigned to variables.",
      choices: [
        {text: "commas", correct: false},
        // {text: "curly brackets", correct: false},
        {text: "quotes", correct: true},
        // {text: "parentheses", correct: false},
      ]
    },

    {
      question: "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: [
        {text: "console.log", correct: true},
        // {text: "JavaScript", correct: false},
        // {text: "terminal/bash", correct: false},
        {text: "for loops", correct: false},
      ]
    }
  ];

  startBtn.addEventListener('click', startQuiz);

  function startQuiz() {
    startBtn.classList.add("hide");
    questionText.innerHTML = questions[currentIndex].question;
    a1.innerHTML = questions[currentIndex].choices[0].text;
    a1.onclick = () => {
        let ano=0;
        if(questions[currentIndex].choices[ano].text){
            if(score<5){
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentIndex<4) {
            nextQuestion();
        }
    }
    a2.innerHTML = questions[currentIndex].choices[1].text;
    a2.onclick = () => {
        let ano=1;
        if(questions[currentIndex].choices[ano].text) {
            if(score<5){
                score++;
            }
        userScore.innerHTML = score;
        if(currentIndex<4){
            nextQuestion();
        }
        }
    }
}
//     countDown = setInterval(timer, 1000);
//     answerBtn.classList.remove("hide");
//     // randomQuestions = questions.sort(() => Math.random() > .5 ? 1 : -1);
//     currentIndex = 0;
//     showQuestions();
//     nextQuestion();
//     ans1.addEventListener("click", chooseAnswer);
//     ans2.addEventListener("click", chooseAnswer);
//     // ans3.addEventListener("click", chooseAnswer);
//     // ans4.addEventListener("click", chooseAnswer);

//   }
// function nextQuestion() {
//     if (currentIndex >= questions.length) {
        
//         clearInterval(countDown);
//         submitHighScore();
//     } else {
//         showQuestions(randomQuestion[currentIndex]);
//     }
// }

// function showQuestions(questions) {
    
//     let choices = questions[currentIndex].choices;
//     choices.sort(() => Math.random() > .5 ? 1 : -1);

//     a1.textContent = choices[0].text;
//     a2.textContent = choices[1].text;
//     // a3.textContent = choices[2].text;
//     // a4.textContent = choices[3].text;

//     a1.value = choices[0].correct;
//     a2.value = choices[1].correct;
//     // a3.value = choices[2].correct;
//     // a4.value = choices[3].correct;
// }

// function chooseAnswer(event) {
//     if (event.target.value == "true") {
//         currentIndex++;
//         nextQuestion();
//     } else {
//         timer = timer - 5;
//         currentIndex++;
//         nextQuestion();
//     }
// }

// function timer() {
//    timerCount--;
//    timerEl.textContent=timerCount;
//     if (timerCount <= -1) {
//         alert("Outta Time!");
//         endQuiz();
//     }
// }

// function endQuiz() {
//     clearInterval(timer);
// }