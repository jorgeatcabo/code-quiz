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
questionsHeading.setAttribute("style","width: 80%;")
var resultsSection = document.querySelector(".results-section")


var answerResult = document.createElement("p")


var hr=document.createElement("hr")


resultsSection.appendChild(hr)
resultsSection.appendChild(answerResult)

var score=0
var numberOfQuestions=questions.length;
var areAllAnswered = false;

timerElement.textContent="Timer: "+timerCount

function init(){
  startSection.style.display = "none"
  quizSection.style.display = "block"
  startQuiz();
  fillAnswersSection();
}

document.querySelector("#start-button").addEventListener("click", function () {
  init()
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
    answerButton.setAttribute("style", "margin: 5px; padding: 5px; background-color: rgb(168, 104, 241); width: 80%;")
    
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
  finalScore.setAttribute("style","margin:10px 0 10px 0;")

  var submitScore = document.createElement("form");
  submitScore.setAttribute("style","margin:10px 0 10px 0;")
  

  submitScore.setAttribute('id',"submit-form");
  
  var label = document.createElement("Label");
  label.htmlFor = "score";
  label.innerHTML="Enter Initials:";
  var initials = document.createElement("input");
  initials.setAttribute('type',"text");
  initials.setAttribute('name',"initials");
  
  var submit = document.createElement("input");
  submit.setAttribute('type',"submit");
  submit.setAttribute('value',"Submit");
  submit.setAttribute("style", "margin: 5px; padding: 5px; background-color: rgb(168, 104, 241);")
  
  submitScore.appendChild(label);
  submitScore.appendChild(initials);
  submitScore.appendChild(submit);
  
  
  
  answersSection.appendChild(finalScore)
  finalScore.textContent="Your final score is: "+score+"/"+numberOfQuestions
  answersSection.appendChild(submitScore)
  
  addFormEventListener();
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

function createHighScores(){
  questionsHeading.textContent="Highscores"
  clearAnswersSection();
  // var highScore = document.createElement("input");
  var highScore = document.createElement("div");
  
  var goBack = document.createElement("button");
  var clearHighScores = document.createElement("button");

  highScore.setAttribute('id',"high-scores");
  highScore.setAttribute('style',"color: red;");
  
  var arrayOfKeys = Object.keys(localStorage);
  var arrayOfValues = Object.values(localStorage);

  var localstorage = {};
  for (var i = 0; i < localStorage.length; i++){
    localstorage[arrayOfKeys[i]] = arrayOfValues[i]
  }

  var orderedLocalStorage = [];
  for (var item in localstorage) {
    orderedLocalStorage.push([item, localstorage[item]]);
  }

  orderedLocalStorage.sort(function(a, b) {
      return b[1] - a[1];
  });

  var scorePosition=1

  for (var i = 0; i < orderedLocalStorage.length; i++){
    var parr=document.createElement("p");
    highScore.appendChild(parr)
    parr.textContent=scorePosition+". "+orderedLocalStorage[i][0]+" - "+orderedLocalStorage[i][1]
    scorePosition++
  }

  goBack.setAttribute('type',"button");
  goBack.setAttribute('name',"go-back");
  goBack.setAttribute('id',"goback");
  goBack.setAttribute("style","margin:15px 0 15px 0;")
  goBack.textContent="Go Back";

  clearHighScores.setAttribute('type',"button");
  clearHighScores.setAttribute('name',"clear-high-scores");
  clearHighScores.setAttribute('id',"clearhighscores");
  clearHighScores.setAttribute("style","margin:15px 0 15px 0;")
  clearHighScores.textContent="Clear Highscores";
  
  answersSection.appendChild(highScore)
  answersSection.appendChild(goBack)
  answersSection.appendChild(clearHighScores)

  addGobackEventListener()
  addClearHighScoresEventListener(highScore)
}

function addFormEventListener(){
  document.querySelectorAll('#submit-form').forEach(item => {
    item.addEventListener('submit', event => {  
      handleFormSubmit(event,item);
    })
  })
}

function addGobackEventListener(){
  document.querySelectorAll('#goback').forEach(item => {
    item.addEventListener('click', event => {  
      location.reload();
    })
  })
}

function addClearHighScoresEventListener(highScore){
  document.querySelectorAll('#clearhighscores').forEach(item => {
    item.addEventListener('click', event => {  
      localStorage.clear();
      clearScores(highScore);
    })
  })
}

function handleFormSubmit(event,item) {
  // Prevent the default behavior
  event.preventDefault();
  localStorage.setItem(item.initials.value, score);
  createHighScores()
}
  
function clearScores(highScore){
if (highScore.children.length>0){
  while (highScore.firstChild) {
    highScore.removeChild(highScore.firstChild);
  }
}
}

document.querySelector(".view-hihgscores").addEventListener("click", function(){
  startSection.style.display = "none"
  quizSection.style.display = "block"
  createHighScores()
});