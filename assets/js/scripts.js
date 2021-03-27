const questions = [
  {
    id: 1,
    question: "Inside which HTML element do we put the JavaScript?",
  },
  {
    id: 2,
    question: "What is the correct JavaScript syntax to change the content of the HTML element below? <p id=\"demo\">This is a demonstration.</p>",
  },
  {
    id: 3,
    question: "Where is the correct place to insert a JavaScript?",
  },
  {
    id: 4,
    question: "What is the correct syntax for referring to an external script called \"xxx.js\"?",
  },
  {
    id: 5,
    question: "The external JavaScript file must contain the <script> tag.",
  },
  {
    id: 6,
    question: "How do you write \"Hello World\" in an alert box?",
  },
  {
    id: 7,
    question: "How do you create a function in JavaScript?",
  },
  {
    id: 8,
    question: "How do you call a function named \"myFunction\"?",
  },
]

const possibleAnswers = [
  {
    id: "1",
    answer: "<script>",
    questionid: 1,
    correct:"true",
  },
  {
    id: "2",
    answer: "<scripting>",
    questionid: 1,
    correct:"false",
  },
  {
    id: "3",
    answer: "<js>",
    questionid: 1,
    correct:"false",
  },
  {
    id: "4",
    answer: "document.getElementByName(\"p\").innerHTML = \"Hello World!\";",
    questionid: 2,
    correct:"false",
  },
  {
    id: "5",
    answer: "document.getElementById(\"demo\").innerHTML = \"Hello World!\";",
    questionid: 2,
    correct:"true",
  },
  {
    id: "6",
    answer: "document.getElement(\"p\").innerHTML = \"Hello World!\";",
    questionid: 2,
    correct:"false",
  },
  {
    id: "7",
    answer: "#demo.innerHTML = \"Hello World!\";",
    questionid: 2,
    correct:"false",
  },
  {
    id: "8",
    answer: "The <head> section",
    questionid: 3,
    correct:"false",
  },
  {
    id: "9",
    answer: "The <body> section",
    questionid: 3,
    correct:"true",
  }, 
  {
    id: "10",
    answer: "Both the <head> section and the <body> section are correct",
    questionid: 3,
    correct:"false",
  },
  {
    id: "11",
    answer: "<script src=\"xxx.js\">",
    questionid: 4,
    correct:"true",
  },
  {
    id: "12",
    answer: "<script name=\"xxx.js\">",
    questionid: 4,
    correct:"false",
  },
  {
    id: "12",
    answer: "<script href=\"xxx.js\">",
    questionid: 4,
    correct:"false",
  },
  {
    id: "13",
    answer: "False",
    questionid: 5,
    correct:"true",
  },
  {
    id: "14",
    answer: "True",
    questionid: 5,
    correct:"false",
  },
  {
    id: "15",
    answer: "alertBox(\"Hello World\");",
    questionid: 6,
    correct:"false",
  },
  {
    id: "16",
    answer: "alert(\"Hello World\");",
    questionid: 6,
    correct:"true",
  },
  {
    id: "17",
    answer: "msgBox(\"Hello World\");",
    questionid: 6,
    correct:"false",
  },
  {
    id: "18",
    answer: "msg(\"Hello World\");",
    questionid: 6,
    correct:"false",
  },
  {
    id: "19",
    answer: "function = myFunction()",
    questionid: 7,
    correct:"false",
  },
  {
    id: "20",
    answer: "function:myFunction()",
    questionid: 7,
    correct:"false",
  },
  {
    id: "21",
    answer: "function myFunction()",
    questionid: 7,
    correct:"true",
  },
  {
    id: "22",
    answer: "call myFunction()",
    questionid: 8,
    correct:"false",
  },
  {
    id: "23",
    answer: "call function myFunction()",
    questionid: 8,
    correct:"false",
  },
  {
    id: "24",
    answer: "myFunction()",
    questionid: 8,
    correct:"true",
  },
]
var timerCount=90;
var questionNumber=1;


var startSection = document.querySelector(".start-section")
var quizSection = document.querySelector(".quiz-section")
var timerElement = document.querySelector(".timer-count");
var answersSection = document.querySelector(".answers-section")
var questionsHeading = document.querySelector(".questions-heading")
var resultsSection = document.querySelector(".results-section")
var answerResult = document.createElement("p")
var hr=document.createElement("hr")
resultsSection.appendChild(hr)
resultsSection.appendChild(answerResult)

var score=0
var numberOfQuestions=questions.length;
var areAllAnswered = false;

timerElement.textContent="Timer: "+timerCount

document.querySelector("#start-button").addEventListener("click", function () {
  startSection.style.display = "none"
  quizSection.style.display = "block"
  startQuiz();
  fillAnswersSection();
})

function fillAnswersSection(){
  clearAnswersSection();
  if (questionNumber<=questions.length){
    var question = questions.find(getQuestion)
    var answers=getAnswers()
    questionsHeading.textContent = question.question
    createAnswers(answers)
    addAnswersEventListeners();
    questionNumber++
  }
  else{
    areAllAnswered=true
    createfinalScore();
  }
}

function createAnswers(answers){
  var length = answers.length
  for (i = 0; i < length; i++) {
    var answerButton = document.createElement("input")
    answersSection.appendChild(answerButton)
    answerButton.setAttribute("data-correct", answers[i].correct)
    answerButton.setAttribute("class", "answer")
    answerButton.setAttribute("style", "margin: 5px;")
    answerButton.setAttribute("type", "button")
    answerButton.value = i+1+". "+answers[i].answer
  }
}

function addAnswersEventListeners(){
document.querySelectorAll('.answer').forEach(item => {
  item.addEventListener('click', event => {  
    checkAnswer(item);    
    fillAnswersSection();
  })
})
}

function checkAnswer(e){
  resultsSection.setAttribute("style","opacity: 1; visibility: visible; -webkit-transition: none; -moz-transition: none; -o-transition: none;")
  
  if (e.getAttribute("data-correct")==="true"){
    answerResult.textContent="Correct!"  
    score++;      
  }
  else{
    timerCount-=10;
    answerResult.textContent="Wrong!"
  }
  
  var waitTransition=1;

  wait = setInterval(function() {
    waitTransition--;
    if (waitTransition >= 0) {
      resultsSection.setAttribute("style","opacity: 0; visibility: hidden; -webkit-transition: visibility 2s linear, opacity 2s linear; -moz-transition: visibility 2s linear, opacity 2s linear; -o-transition: visibility 2s linear, opacity 2s linear;")      
    }
  // Tests if time has run out
  if (timerCount === 0) {
    // Clears interval
    clearInterval(timer);
  }
}, 0);
}

function clearAnswersSection(){
if (answersSection.children.length>0){
  while (answersSection.firstChild) {
    answersSection.removeChild(answersSection.firstChild);
  }
}
}

function startQuiz() {
  areAllAnswered = false;
  startTimer()
}

function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = "Timer: "+timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (areAllAnswered && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer);
        createfinalScore();
      }
    }
  // Tests if time has run out
  if (timerCount === 0) {
    // Clears interval
    clearInterval(timer);
    createfinalScore();
  }
}, 1000);
}

function createfinalScore(){
  questionsHeading.textContent="All Done!"
  clearAnswersSection();
  var finalScore = document.createElement("p")
  answersSection.appendChild(finalScore)
  finalScore.textContent="Your final score is: "+score+"/"+numberOfQuestions
  questionNumber=1;
}


function getQuestion(obj) {
  return obj.id === questionNumber;
}

function getAnswers(){
  var filteredAnswers = possibleAnswers.filter(function (obj) {
    return obj.questionid === questionNumber;
  })
  .map(function (obj) {
    return obj
  })
  return filteredAnswers;
}