const questions = [
  {
    id: '1',
    question: 'Inside which HTML element do we put the JavaScript?',
  },
  {
    id: '2',
    question: 'Pregunta 2',
  },
  {
    id: '3',
  question: 'Pregunta 3',
},
]
const possibleAnswers = [
  {
    id: '1',
    answer: '<script>',
    questionid: '1',
  },
  {
    id: '2',
    answer: '<scripting>',
    questionid: '1',
  },
  {
    id: '3',
    answer: '<js>',
    questionid: '1',
},
]


var startSection=document.querySelector(".start-section");
var quizSection=document.querySelector(".quiz-section");
document.querySelector("#start-button").addEventListener("click", function() {
    startSection.style.display = "none";
    quizSection.style.display = "block";
  });

var answersSection=document.querySelector(".answers-section");



  

function findQuestion(obj){
  return obj.id === '1'; 
}



  var question = questions.find(findQuestion);
  console.log(question.question);
  
  

  var filteredAnswers = possibleAnswers.filter(function( obj ) {
    return obj.questionid === '1';
}).map(function( obj ) {
    return obj;
});

console.log( filteredAnswers ); // a list 


var length=filteredAnswers.length;


 for(i=0;i<length;i++){
    var answerButton=document.createElement("input");
    answersSection.appendChild(answerButton);
    answerButton.setAttribute("data-index", i);
    answerButton.setAttribute("style","margin: 5px;");
    answerButton.setAttribute("type","button");
    answerButton.value=filteredAnswers[i].answer;
}

