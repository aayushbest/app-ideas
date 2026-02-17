const binaryNumberInput = document.querySelector("#binaryNumberInput");
const decimalNumberOutput = document.querySelector("#decimalNumberOutput");
const box = document.querySelector(".box");

binaryNumberInput.addEventListener("input", calculateDecimalValue);

function calculateDecimalValue(event) {
  const targetValue = event.target.value;
  let decimalNumber = 0;
  let index = 0;
  if (targetValue === "") {
    decimalNumberOutput.innerHTML = "Result";
  } else {
    for (const char of targetValue) {
      if (isNaN(char)) {
        decimalNumberOutput.innerHTML = "Not a Number!";
        box.style.backgroundColor = "red";
        decimalNumberOutput.style.color = "white";
      } else {
        if (char !== "0" && char !== "1") {
          decimalNumberOutput.innerHTML = "Not a Binary Number!";
        box.style.backgroundColor = "red";
        decimalNumberOutput.style.color = "white";
        } else {
          decimalNumber +=
            Number(char) * Math.pow(2, targetValue.length - 1 - index);
          index++;
          decimalNumberOutput.innerHTML = decimalNumber;
        }
      }
    }
  }
}
