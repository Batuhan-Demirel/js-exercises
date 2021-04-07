function Question(text, choices , answer) {
  (this.text =text), (this.choices = choices), (this.answer = answer);
}

//question protype
Question.prototype.checkAnswer = function (answer) {
  return this.answer === answer;
};

//quiz consturctar
function Quiz(questions) {
  this.questions = questions;
  this.score = 0;
  this.questionsIndex = 0;
}
//quiz prototype
Quiz.prototype.getQuestion = function () {
  return this.questions[this.questionsIndex];
};
//quiz isFİnish
Quiz.prototype.isFinish = function () {
  return this.questions.length === this.questionsIndex;
};

//quiz guess
Quiz.prototype.guess = function (answer) {
  var question = this.getQuestion();

  if (question.checkAnswer(answer)) {
    this.score++;
  }
  this.questionsIndex++;
};

var q1 = new Question(
    "En populer dil hangisi ?",
    ["js", "python", "c#", "asd"],
    "js"
  );
  var q2 = new Question(
    "En çok kullanılan dil hangisi ?",
    ["js", "python", "c#", "asd"],
    "js"
  );
  var q3 = new Question(
    "En çok iyi dil hangisi ?",
    ["js", "python", "c#", "asd"],
    "js"
  );
  var questions = [q1, q2, q3];

//Start Quiz
var quiz = new Quiz(questions);

loadQuestion();

function loadQuestion() {
  if (quiz.isFinish()) {
    showScore();
  } else {
    var question = quiz.getQuestion();
    var choices = question.choices;
    document.querySelector("#question").textContent = question.text; 
    for(var i=0; i<choices.length ;i++){
        var element =document.querySelector("#choice"+i);
        element.innerHTML=choices[i]
        guess("btn"+i,choices[i])
    } 
    showProgress();
  }
}

function guess(id,guess){
    var btn =document.getElementById(id);
    btn.onclick=function(){
        quiz.guess(guess);
        loadQuestion();
    }

}
function showScore() {
    var html = `<h2>Score</h2><h4>${quiz.score}</h4>`

    document.querySelector(".card-body").innerHTML=html;
};  

function showProgress(){
    var totalQuestion= quiz.questions.length;
    var questionNumber= quiz.questionsIndex+1;
    document.querySelector("#progress").innerHTML="Question "+questionNumber+" of "+totalQuestion;
}