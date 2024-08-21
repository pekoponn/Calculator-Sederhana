function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendNumber(number) {
    document.getElementById('display').value += number;
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    const lastChar = display.value[display.value.length - 1];

    if ('+-*/'.includes(lastChar)) {
        display.value = display.value.slice(0, -1) + operator;
    } else {
        display.value += operator;
    }
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
