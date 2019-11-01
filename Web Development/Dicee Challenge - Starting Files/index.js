var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);
var leftDice = document.querySelector(".img1");
var rightDice = document.querySelector(".img2");

function getLeftDice() {
  var diceNum = "images/dice" + randomNumber1 + ".png";
  return String(diceNum);
}

function getRightDice() {
  var diceNum = "images/dice" + randomNumber2 + ".png";
  return String(diceNum);
}

function getWinner() {
  var winner = document.querySelector("h1");

  if (randomNumber1 > randomNumber2) {
    winner.innerHTML = "🚩 Player 1 Wins!";
  }
  else if (randomNumber1 < randomNumber2) {
    winner.innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    winner.innerHTML = "Draw!";
  }
}

getWinner();
leftDice.setAttribute("src", getLeftDice());
rightDice.setAttribute("src", getRightDice());
