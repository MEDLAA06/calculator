const calculatorContainer = document.getElementById('calculator_container');
const displayArea = document.getElementById('display_area');

calculatorContainer.addEventListener('click', (e) => {
  if (e.target.nodeName === "BUTTON") {
    const value = e.target.textContent;

    switch (value) {
      case "C":
        clear();
        break;
      case "DEL":
        deleteOneValue();
        break;
      case "=":
        evaluate();
        break;
      default:
        addToDisplayArea(value);
    }
  }
});

function clear() {
  displayArea.textContent = '';
}

function deleteOneValue() {
  displayArea.textContent = displayArea.textContent.slice(0, -1);
}

function evaluate() {
  try {
    const result = math.evaluate(displayArea.textContent);
    displayArea.textContent = result;
  } catch (error) {
    displayArea.textContent = 'Invalid';
    console.error(error);
  }
}

function addToDisplayArea(value) {
  displayArea.textContent += value;
}
