let display = document.querySelector('input');
let current = '';

function addValue(value) {
	current += value;
	display.value = current;
}
function clearAll() {
	current = current.slice(0, -1);
	display.value = current;
}
function toggleSign() {
	current = current * -1;
	display.value = current;
}
function calculate() {
	display.value = eval(current);
	current = display.value;
}
