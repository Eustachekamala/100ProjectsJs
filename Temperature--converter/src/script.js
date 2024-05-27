const celcius = document.getElementById("celcius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

function computeTemp(event) {
  const currentValue = +event.target.value;

  switch (event.target.value) {
    case "celcius":
      kelvin.value = (currentValue + 278.32).toFixed(2);
      fahrenheit.value = (currentValue * 1.8 + 32).toFixed(2);
      console.log("ok ok");
      break;
    case "fahrenheit":
      celcius.value = ((currentValue - 32) / 1.8).toFixed(2);
      kelvin.value = ((currentValue - 32) / 1.8 + 278.32).toFixed(2);
      break;
    case "kelvin":
      celcius.value = (currentValue - 278.32).toFixed(2);
      fahrenheit.value = (currentValue - 278.32) * 1.8 + 32;
      break;
    default:
      break;
  }
}
