const btnEl = document.getElementById("btn--calculator");
const birthdayEl = document.getElementById("date");
const result = document.getElementById("age--calculate");

function calculateAge() {
  const birthdayValue = birthdayEl.value;
  if (birthdayValue === "") {
    alert("Please enter the date of birthaday");
  } else {
    const age = getAge(birthdayValue);
    result.innerText =
      "Your age is " + `${age} ${age > 1 ? "years" : "year"} old`;
  }
}
function getAge(birthdayValue) {
    let currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear()-birthdayDate.getFullYear();
    const month = currentDate.getMonth()-birthdayDate.getMonth();
  
    if (
      month < 0 ||
      (month === 0 && currentDate.getDate() < birthdayDate.getDate)
    ) {
      age--;
    }
    return age;
  }

  btnEl.addEventListener("click",calculateAge);