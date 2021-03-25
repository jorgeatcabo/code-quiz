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

var startSection = document.querySelector(".start-section")
var quizSection = document.querySelector(".quiz-section")
var timerElement = document.querySelector(".timer-count");
timerElement.textContent=timerCount

document.querySelector("#start-button").addEventListener("click", function () {
  startSection.style.display = "none"
  quizSection.style.display = "block"
  startQuiz();
  createAnswers();
})



var answersSection = document.querySelector(".answers-section")
var questionsHeading = document.querySelector(".questions-heading")

function startQuiz() {
  // isWin = false;
  //timerCount = 90;
  // // Prevents start button from being clicked when round is in progress
  //startButton.disabled = true;
  // renderBlanks()
  startTimer()
}


function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // Tests if win condition is met
      // if (isWin && timerCount > 0) {
      //   // Clears interval and stops timer
      //   clearInterval(timer);
      //   winGame();
      // }
    }
  // Tests if time has run out
  if (timerCount === 0) {
    // Clears interval
    // clearInterval(timer);
    // loseGame();
  }
}, 1000);
}


function createAnswers(){
  function findQuestion(obj) {
    return obj.id === 1;
  }
  
  var question = questions.find(findQuestion)

  questionsHeading.textContent = question.question
  
  var filteredAnswers = possibleAnswers
    .filter(function (obj) {
      return obj.questionid === 1;
    })
    .map(function (obj) {
      return obj
    })
  
  var length = filteredAnswers.length
  
  for (i = 0; i < length; i++) {
    var answerButton = document.createElement("input")
    answersSection.appendChild(answerButton)
    answerButton.setAttribute("data-index", i)
    answerButton.setAttribute("class", "button")
    answerButton.setAttribute("style", "margin: 5px;")
    answerButton.setAttribute("type", "button")
    answerButton.value = i+1+". "+filteredAnswers[i].answer
    
  }

  document.querySelectorAll('.button').forEach(item => {
    item.addEventListener('click', event => {      
      createAnswers();
    })
  })
  // document.querySelectorAll(".button").addEventListener("click", function () {
  //   quizSection.style.display = "none"
  // })
}
