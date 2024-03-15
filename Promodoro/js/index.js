const timer = document.getElementById("timer");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
let timeLeft = 1500; // Time in seconds left on the clock (default is 25 minutes)
let intervalId; // The setInterval function returns a number representing the ID of the interval, which we can use to clear it later if needed

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  timer.innerHTML = formattedTime;
}

function startTimer() {
  intervalId = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(intervalId);
      alert("Time's up!");
      timeLeft = 1500;
      updateTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
}
function resetTimer() {
  clearInterval(intervalId);
  timeLeft = 1500;
  updateTimer();
}

start.addEventListener("click", startTimer);
pause.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);

