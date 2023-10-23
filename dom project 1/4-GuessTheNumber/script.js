let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const gesSlots = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const starOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let previousGuess = [];
let numGuess = 0;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess); // for cheking !!!!
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  
  if(isNaN(guess)){
      alert("Enter the valid value !!!")
  } else if(guess < 1){
      alert("please enter the value more the one ")
  } else if(guess > 100){
      alert("please enterthe value less then 100 ")
  } else{
      previousGuess.push(guess)
      if(numGuess === 10){
          displayGuess(guess)
          displayMsg(`Game over; random number was ${randomNumber}`)
          endGame()
      } else{
         displayGuess(guess)
         checkGuess(guess)

      }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMsg(`You win`);
    endGame();
  } else if (guess < randomNumber) {
    displayMsg(`number is to short... `);
  } else if (guess > randomNumber) {
    displayMsg(`number is to high... `);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  gesSlots.innerHTML += `${guess} , `;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess}`;
}

function displayMsg(msg) {
  lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}

function endGame() {
    userInput.value = ""
    userInput.setAttribute("disabled", "")
    p.classList.add("button")
    p.innerHTML = `<h2 id="newGame">Star new game<h2/>`
    starOver.appendChild(p)
    playGame = false
    newGame()
} 

function newGame() {
    const newbtn = document.querySelector("#newGame")
    newbtn.addEventListener("click", function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        previousGuess = []
        numGuess = 0
        gesSlots.innerHTML = ""
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute("disabled")
        starOver.removeChild(p)
        playGame = true
    })
}
