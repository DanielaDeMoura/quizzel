const correctAudio = new Audio("./assets/sfx/correct.wav");
const incorrectAudio = new Audio("./assets/sfx/incorrect.wav");

// Example to play the audio when start button is clicked
document.getElementById("start").addEventListener("click", function () {
  incorrectAudio.play();
});
