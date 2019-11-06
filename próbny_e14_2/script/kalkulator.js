const containerEl = document.getElementById("result");
const errorsContainerEl = document.getElementById("errors");
const formEl = document.getElementById("form");
const sizeEl = document.getElementById("size");
const costEl = document.getElementById("cost");
const calculateBtnEl = document.getElementById("calculate-btn");

function calculateSize(x, y) {
  const z = 2.7;
  return x * y * z;
}

function calculatePrice(size) {
  const pricePerMeter = 8;
  return size * pricePerMeter;
}

calculateBtnEl.addEventListener("click", e => {
  e.preventDefault();
  const x = parseFloat(formEl.bok1.value);
  const y = parseFloat(formEl.bok2.value);

  if (!formEl.checkValidity()) {
    errorsContainerEl.innerText = "Błąd: Niepoprawna wartość!";
    containerEl.style.display = "none";
  } else {
    errorsContainerEl.innerText = "";
    containerEl.style.display = "block";
    const size = calculateSize(x, y);
    const price = calculatePrice(size).toFixed(2);
    sizeEl.innerText = size;
    costEl.innerText = price;
  }
});
