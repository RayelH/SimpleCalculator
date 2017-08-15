var screen = document.getElementById("result");
var numbers = document.getElementsByClassName("number");
var del = document.getElementById("delete")
var operators = document.getElementsByClassName("operator");
var evaluateButton = document.getElementById("=")

for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function() {
    num = this.innerHTML;
    screen.innerHTML += num;
  });
}

for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function() {
    op = this.innerHTML;
    screen.innerHTML += op;
  });
}

del.addEventListener("click", function() {
  screen.innerHTML = "";
});

evaluateButton.addEventListener("click", function() {
  screen.innerHTML = eval(screen.innerHTML);
});
