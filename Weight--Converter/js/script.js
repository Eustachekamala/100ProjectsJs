const input = document.getElementById("input");
const errorEl = document.getElementById("error");
const resultEl = document.getElementById("result");
let errorTime;
let resultTime;

function updateResults() {
  if (input.value <= 0 || isNaN(input.value)) {
    errorEl.innerText = "Please enter a valid number";
    clearTimeout(errorTime);
    errorTime = setTimeout(() => {
      errorEl.innerText = " ";
      input.value = "";
    }, 2000);
  } else {
    resultEl.innerText = (+input.value / 2.2).toFixed(2);
    clearTimeout(resultTime);
    resultTime = setTimeout(() => {
      resultEl.innerText = "";
      input.value = "";
    }, 10000);
  }
}

input.addEventListener("input", updateResults);
