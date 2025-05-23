const tempInput = document.getElementById("temp-input");
const radios = document.getElementsByName("conversion");
const resultDiv = document.getElementById("result");

function convertTemperature() {
  const value = parseFloat(tempInput.value);
  if (isNaN(value)) {
    resultDiv.textContent = "Result: --";
    return;
  }

  let conversionType = "c-to-f";
  for (let radio of radios) {
    if (radio.checked) {
      conversionType = radio.value;
      break;
    }
  }

  let result;
  if (conversionType === "c-to-f") {
    result = (value * 9/5) + 32;
    resultDiv.textContent = `Result: ${result.toFixed(2)} °F`;
  } else {
    result = (value - 32) * 5/9;
    resultDiv.textContent = `Result: ${result.toFixed(2)} °C`;
  }
}

tempInput.addEventListener("input", convertTemperature);
for (let radio of radios) {
  radio.addEventListener("change", convertTemperature);
}
