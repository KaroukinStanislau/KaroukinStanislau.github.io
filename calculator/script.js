window.onload = function() {

    var calc = document.getElementById('calc');
    var operations = {
        "+": function(a, b) {
            return a + b;
        },
        "-": function(a, b) {
            return a - b;
        },
        "*": function(a, b) {
            return a * b;
        },
        "/": function(a, b) {
            return a / b;
        },
        "%": function(a, b) {
            return Math.floor(a / b);
        }
    };

    calc.onclick = function() {
        var a = parseFloat(aInput.value);
        var b = parseFloat(bInput.value);
        var op = document.getElementById('operation').value;
        document.getElementById('result').innerHTML = operations[op](a, b);
    }
}
