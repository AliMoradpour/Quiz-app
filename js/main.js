const quizData = [
  {
    question: "What Can Ali Do?",
    a: "Front-end Developer",
    b: "back-end Developer",
    c: "UI/UX Designer",
    d: "A And C",
    correct: "d",
  },
  {
    question: "what color does he like?",
    a: "Blue",
    b: "Red",
    c: "Green",
    d: "Purple",
    correct: "b",
  },
  {
    question: "How Old is He ?",
    a: "18",
    b: "19",
    c: "20",
    d: "21",
    correct: "c",
  },
  {
    question: "Is He a Good Developer?",
    a: "Yes",
    b: "!No",
    c: "B",
    d: "C",
    correct: "a",
  },
];

let questionCnt = 0;
let score = 0;

let quiz = document.getElementById("quiz");
let questionEl = document.getElementById("question");
let a_text = document.getElementById("a-text");
let b_text = document.getElementById("b-text");
let c_text = document.getElementById("c-text");
let d_text = document.getElementById("d-text");
let submitBtn = document.getElementById("submit");
let answer = undefined;
let answerEls = document.querySelectorAll(".answer");

loadQuiz();

function loadQuiz() {
  deSelectAnswer();
  const currentQuizData = quizData[questionCnt];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
function deSelectAnswer() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}
submitBtn.addEventListener("click", function () {
  //check to see  the answer
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[questionCnt].correct) {
      score++;
    }
    questionCnt++;
    if (questionCnt < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML =
        "<h2>You Answered correctly at " +
        score +
        "/" +
        quizData.length +
        " questions.</h2> <button onclick='location.reload()'>Reaload</button>";
    }
  } else {
    alert("Please Enter Select a Answer");
  }
});
