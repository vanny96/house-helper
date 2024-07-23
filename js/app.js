function changeColor(colorClass, color) {
  const elements = document.getElementsByClassName(colorClass);
  for (let element of elements) {
    element.style.backgroundColor = color;
  }
}

const primaryColorPicker = document.getElementById("primary-color");
const secondaryColorPicker = document.getElementById("secondary-color");
const accentColorPicker = document.getElementById("accent-color");

primaryColorPicker.addEventListener('change',
    (event) => changeColor("primary-color", event.target.value));

secondaryColorPicker.addEventListener('change',
    (event) => changeColor("secondary-color", event.target.value));

accentColorPicker.addEventListener('change',
    (event) => changeColor("accent-color", event.target.value));