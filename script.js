function clearNumber(num) {
    document.getElementById("calculateValue").value = num;
}

function NumberValue(num) {
    document.getElementById("calculateValue").value += num;
}

function Calculate() {
    try {
        clearNumber(eval(document.getElementById("calculateValue").value))
    } catch (e) {
        clearNumber('Error')
    }
}