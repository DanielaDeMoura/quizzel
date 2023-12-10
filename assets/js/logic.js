document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("start");
  const startScreen = document.getElementById("start-screen");
  const questionsScreen = document.getElementById("questions");
  const questionTitle = document.getElementById("question-title");
  const choicesContainer = document.getElementById("choices");

  let currentQuestionIndex = 0; // Track the current question index

  startButton.addEventListener("click", function () {
    startScreen.classList.add("hide");
    questionsScreen.classList.remove("hide");
    showQuestion();
  });

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
// check if the answer is right
    // log the chosen choice check if correct
    console.log("Chosen:", choice);
    console.log("Correct:", choice === correctAnswer);

    // Move onto the next question or end the quiz if there aren't questions
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  }

  function endQuiz() {

    console.log("Quiz complete 🥳🎉🎊");
  }
});



const correctAudio = new Audio("./assets/sfx/correct.wav");
const incorrectAudio = new Audio("./assets/sfx/incorrect.wav");

// Example to play the audio when start button is clicked
document.getElementById("start").addEventListener("click", function () {
  incorrectAudio.play();
});
