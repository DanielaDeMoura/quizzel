document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("start");
  const startScreen = document.getElementById("start-screen");
  const questionsScreen = document.getElementById("questions");
  const questionTitle = document.getElementById("question-title");
  const choicesContainer = document.getElementById("choices");
  const timerDisplay = document.getElementById("timer");

  let currentQuestionIndex = 0;
  let timerDuration = 100;
  let timer; 


  startButton.addEventListener("click", function () {
    startScreen.classList.add("hide");
    questionsScreen.classList.remove("hide");
    showQuestion();
    startTimer();
  });

  function startTimer() {
    timer = setInterval(function () {
      timerDuration--;
      if (timerDuration >= 0) {
        timerDisplay.textContent = timerDuration;
      } else {
        clearInterval(timer);
        goToEndScreen();
      }
    }, 1000);
  }


  function showQuestion() {
    const currentQuestion = getQuestion(currentQuestionIndex);
    populateQuestion(currentQuestion);
  }

  function getQuestion(index) {
    const questions = [
      {
        title: "What is the correct way to declare a variable in JavaScript?",
        choices: ["var x = 5;", "variable x = 5;", "let x = 5;", "x = 5;"],
        answer: "let x = 5;",
      },
      {
        title: "Question 2: How do you write a comment in JavaScript?",
        choices: ["//This is a comment", "<!--This is a comment-->", "'This is a comment", "/* This is a comment */"],
        answer: "//This is a comment",
      },
      {
        title: "Question 3: What will the following code output? console.log(2 + '2')",
        choices: ["22", "4", "'22'", "NaN/"],
        answer: "22",
      },
      {
        title: "Question 4: How can you check if a variable is an array in JavaScript?",
        choices: ["typeof arr === 'array';", "isArray(arr);", "arr instanceof Array;", "isarray(arr);"],
        answer: "typeof arr === 'array';",
      },
      {
        title: "Question 5: What does the === operator do in JavaScript?",
        choices: ["Checks for equality without type coercion", "Assigns a value to a variable", "Compares two values for equality with type coercion", "Checks for inequality with type coercion"],
        answer: "Checks for equality without type coercion",
      },
    ];

    return questions[index];
  }

  function populateQuestion(question) {
    questionTitle.textContent = question.title;
    choicesContainer.innerHTML = "";

    question.choices.forEach((choice, index) => {
      const choiceButton = document.createElement("button");
      choiceButton.textContent = choice;
      choiceButton.classList.add("choice");
      choiceButton.addEventListener("click", function () {
        handleChoice(choice, question.answer);
      });

      choicesContainer.appendChild(choiceButton);
    });
  }

  function handleChoice(choice, correctAnswer) {
    if (choice === correctAnswer) {
      console.log("That's correct");
      hideFeedback();
      showQuestion();
    } else {
      subtractTime();
      console.log("That is incorrect, please try again");
      if (timerDuration > 0) {
        hideFeedback();
        showQuestion();
      } else {
        hideFeedback();
        goToEndScreen();
      }
    }
  }

  function subtractTime() {
   timerDuration -= 10;

   if (timerDuration < 0) {
    timerDuration = 0;
   }
   timerDisplay.textContent = timerDuration;
  }

  function hideFeedback() {
    const feedbackDiv = document.getElementById("feedback");
    feedbackDiv.textContent = "";
    feedbackDiv.classList.add("hide");
  }

  function goToEndScreen() {
    hideFeedback();
    questionsScreen.classList.add("hide");
    endQuiz();
  }

  function endQuiz() {
    clearInterval(timer);
    console.log("Quiz complete 🥳🎉🎊");
  }
});

const correctAudio = new Audio("./assets/sfx/correct.wav");
const incorrectAudio = new Audio("./assets/sfx/incorrect.wav");

document.getElementById("start").addEventListener("click", function () {
  incorrectAudio.play();
});
