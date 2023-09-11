const metricRadio = document.getElementById("radioMetric");
const imperialRadio = document.getElementById("radioImperial");
const calculator = document.getElementById("calculator");
const inputGroup = document.getElementById("inputGroup");
let unit = "metric";

function changeUnitRadio(un) {
  if (un === unit) return;

  unit = un;
  const activeRadio = un === "metric" ? metricRadio : imperialRadio;
  const inactiveRadio = un === "metric" ? imperialRadio : metricRadio;

  activeRadio.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
      <circle cx="15.5" cy="15.5" r="15.5" fill="#345FF6" fill-opacity="0.15"/>
      <circle cx="15.5" cy="15.5" r="7.5" fill="#345FF6"/>
    </svg>
  `;

  inactiveRadio.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
      <circle cx="15.5" cy="15.5" r="15" fill="white" stroke="#D8E2E7"/>
    </svg>
  `;
}

function changeInputs(un) {
  const bx3 = document.querySelectorAll(".bx3");
  const bx4 = document.querySelectorAll(".bx4");
  const inputGroup = document.getElementById("inputGroup");
  const calculator = document.getElementById("calculator");
  if (un === unit) return;
  if (un === "imperial") {
    bx3.forEach((elem) => {
      elem.classList.remove("box3");
      elem.classList.add("box3OFF");
    });
    bx4.forEach((elem) => {
      elem.classList.remove("bx4OFF");
      elem.classList.add("box4");
    });
    inputGroup.classList.remove("inputGroupMetric");
    inputGroup.classList.add("inputGroupImperial");
    calculator.classList.remove("calculatorMetric");
    calculator.classList.add("calculatorImperial");
  }

  if (un === "metric") {
    bx3.forEach((elem) => {
      elem.classList.remove("box3OFF");
      elem.classList.add("box3");
    });
    bx4.forEach((elem) => {
      elem.classList.remove("box4");
      elem.classList.add("box4OFF");
    });
    inputGroup.classList.remove("inputGroupImperial");
    inputGroup.classList.add("inputGroupMetric");
    calculator.classList.remove("calculatorImperial");
    calculator.classList.add("calculatorMetric");
  }
}

function changeUnit(un) {
  changeInputs(un);
  changeUnitRadio(un);
}
