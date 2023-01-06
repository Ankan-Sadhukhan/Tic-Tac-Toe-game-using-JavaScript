var currentTurn = "x";
var gameOver = false;
var count = 0;

function play(id) {
  if (!document.getElementById(id).innerText && !gameOver) {
    document.getElementById(id).innerText = currentTurn;
    count++;
    result();

    if (count === 9 && !gameOver) {
      document.getElementById("message").innerText = "Game is Tie";
    }

    if (currentTurn === "x") {
      currentTurn = "o";
    } else {
      currentTurn = "x";
    }
  }
}

function result() {
  var cell1Value = document.getElementById("1").innerText;
  var cell2Value = document.getElementById("2").innerText;
  var cell3Value = document.getElementById("3").innerText;
  var cell4Value = document.getElementById("4").innerText;
  var cell5Value = document.getElementById("5").innerText;
  var cell6Value = document.getElementById("6").innerText;
  var cell7Value = document.getElementById("7").innerText;
  var cell8Value = document.getElementById("8").innerText;
  var cell9Value = document.getElementById("9").innerText;

  if (
    (cell1Value !== "" &&
      cell1Value === cell2Value &&
      cell2Value === cell3Value) ||
    (cell4Value !== "" &&
      cell4Value === cell5Value &&
      cell5Value === cell6Value) ||
    (cell7Value !== "" &&
      cell7Value === cell8Value &&
      cell8Value === cell9Value) ||
    (cell1Value !== "" &&
      cell1Value === cell4Value &&
      cell4Value === cell7Value) ||
    (cell2Value !== "" &&
      cell2Value === cell5Value &&
      cell5Value === cell8Value) ||
    (cell3Value !== "" &&
      cell3Value === cell6Value &&
      cell6Value === cell9Value) ||
    (cell1Value !== "" &&
      cell1Value === cell5Value &&
      cell5Value === cell9Value) ||
    (cell3Value !== "" &&
      cell3Value === cell5Value &&
      cell5Value === cell7Value)
  ) {
    gameOver = true;
    document.getElementById("message").innerText =
      "Game over! " + currentTurn + " won";
  }
}

function reset() {
  location.reload();
}
