var startBtn = document.getElementById("start-quiz");
var nextBtn = document.getElementById("next");
var questionText = document.getElementById('question-ask');
var timerCount = 120;
var countDown;
var trueBtn = document.getElementById("true");
var falseBtn = document.getElementById("false");
var timerEl = document.getElementsByClass("timer-count");
var userScore = document.getElementById("user-score");
var answerOptions = document.getElementByClass("button-option")


let currentIndex = 0;
var score = 0;

var questions = [
    {
      question: "Commonly used data types DO NOT include:",
      choices: [
        {text: "alerts", choice: true},
        {text: "numbers", choice: false},
    ]          
    },

    {
      question: "The condition in an if / else statement is enclosed within ____.",
      choices: [
        {text: "parentheses", choice: true},
        {text: "square brackets", choice: false}, 
      ]
    },

    {
      question: "Arrays in JavaScript can be used to store ____.",
      choices: [
        {text: "numbers and strings, other arrays, booleans", choice: true},
        {text: "styles", choice: false},
      ]
    },

    {
      question: "String values must be enclosed within ____ when being assigned to variables.",
      choices: [
        {text: "commas", choice: false},
        {text: "quotes", choice: true},
      ]
    },

    {
      question: "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: [
        {text: "console.log", choice: true},
        {text: "for loops", choice: false},
      ]
    }
  ];

  startBtn.addEventListener('click', startQuiz);
  nextBtn.addEventListener('click', nextQuestion);

  function startQuiz() {
    startBtn.classList.add("hide");
    questionText.innerHTML = questions[currentIndex].question;
    trueBtn.innerHTML = questions[currentIndex].choices[0].text;
    trueBtn.onclick = () => {
        let ano=0;
        if(questions[currentIndex].choices[ano].choice){
            if(score<5){
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentIndex<4) {
            nextQuestion();
        }
    }
    falseBtn.innerHTML = questions[currentIndex].choices[1].text;
    falseBtn.onclick = () => {
        let ano=1;
        if(questions[currentIndex].choices[ano].choice) {
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