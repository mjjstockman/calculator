const keys = document.querySelector(".calc__keys");
const display = document.querySelector("#calc__display");

// Show input on calc display
keys.addEventListener("click", (event) => {
  const key = event.target;
  const input = key.textContent;
  const displayValue = display.textContent;

  if (key.classList.contains("number")) {
    if (displayValue == 0) {
      display.textContent = input;
    } else {
      display.textContent = displayValue + input;
    }
  } else {
    console.log("NaN");
  }
});
