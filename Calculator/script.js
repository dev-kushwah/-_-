function addToResult(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = "";
}

function backspace() {
    var result = document.getElementById("result").value;
    document.getElementById("result").value = result.substring(0, result.length - 1);
}

function calculate() {
    var result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;
}
