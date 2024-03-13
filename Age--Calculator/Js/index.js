const btnEl = document.getElementById("btn--calculator");
const birthdayDate = document.getElementById("date");
const result = document.getElementById("age--calculate");

function calculateAge() {
  let birthdayValue = birthdayDate.value;
  if (birthdayValue === "") {
    alert("Please enter your date of birth");
  } else {
    // Get the age from the input value
    const age = getDate(birthdayValue);
    result.innerText =
      "Your age is " + `${age} ${age > 1 ? "years" : "year"}` + " old";
  }
}

function getDate(birthdayDate) {
  let currentDate = new Date();
  const birthDay = new Date(birthdayDate);
  let yearDifference = currentDate.getFullYear() - birthDay.getFullYear();
  let monthDifference = currentDate.getMonth() - birthDay.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && currentDate.getDate() < birthDay.getDate())
  ) {
    yearDifference--;
  }
  return yearDifference;
}

btnEl.addEventListener("click", calculateAge);
