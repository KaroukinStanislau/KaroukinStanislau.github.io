window.onload = function() {

  var aInput = document.getElementById('aInput');
  var bInput = document.getElementById('bInput');
  var op = document.getElementById('operation');
  var res = document.getElementById('result');
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
      var c = a / b;
      return c > 0 ? Math.floor(c) : Math.ceil(c);
    }
  };

  calc.onclick = function() {
    var a = parseFloat(aInput.value);
    var b = parseFloat(bInput.value);
    res.innerHTML = operations[op.value](a, b);
  }
}
