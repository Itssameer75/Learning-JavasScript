let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userImput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHig = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

let para = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (event) {
    event.preventDefault();

    const guess = parseInt(userImput.value);

    validateGuess();
  });
}

function validateGuess(guess) {

  if (isNaN(guess)) {
    alert("ente");
  } else if (guess < 1) {
    alert("enter the number more then one");
  } else if (guess > 100) {
    alert("enter the number less then one hundread");
  } else {
    prevGuess.push(guess);
    if(numGuess === 11) {
      displayGuess(guess);
      displayMsg(`Game over: and the random number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNum) {
    displayMsg(`You win the match `);
  } else if (guess < randomNum) {
    displayMsg(`this number too short `);
  } else if (guess > randomNum) {
    displayMsg(`this number too big  `);
  }
}

function displayGuess(guess) {
  userImput.value = "";
  guessSlot.innerHTML += `${guess} : `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHig.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userImput.value = "";
  userImput.setAttribute("disabled", "");
  para.classList.add("button");
  para.innerHTML = `<h2 id="newGame">Start new game</h2>`;
  startOver.appendChild(para);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener("click",function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = ""
    remaining.innerHTML = `${11 - numGuess}`
    userImput.removeAttribute("disabled")
    startOver.removeChild(para)
    playGame = true
  })
}
