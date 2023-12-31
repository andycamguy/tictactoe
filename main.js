let boardArray = [" ", " ", " ", " ", " ", " ", " ", " ", " "]; // create the board as an array
let currentPlayer = "X";
let playerXscore = 0;
let playerOscore = 0;
let gameActive = true; // flag variable to track the game state

const winningCombinations = [
  [0, 1, 2], // Horizontal combinations
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // Vertical combinations
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // Diagonal combinations
  [2, 4, 6]
];

function boardLayout() {
  let outputElement = document.getElementById("output"); // access the div to display the grid

  // Create the grid structure
  outputElement.innerHTML = "<div class='grid-container'></div>";

  // Access the grid container
  let gridContainer = document.querySelector(".grid-container");

  boardArray.forEach((item) => {
    // Create a grid item for each array element
    let gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.textContent = item;

    // Append the grid item to the grid container
    gridContainer.appendChild(gridItem);
  });
}

function getInput() {
  let gridItems = document.getElementsByClassName("grid-item");

  Array.from(gridItems).forEach((item, index) => {
    item.addEventListener("click", function () {
      if (gameActive && boardArray[index] === " ") { // Check if game is active and grid item is empty
        boardArray[index] = currentPlayer;
        gridItems[index].textContent = currentPlayer;
        winConditions();
        Playerswitch();
      }
    });
  });
}

function Playerswitch() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

const winConditions = () => {
  const isTie = boardArray.every((item) => item !== " ");

  if (isTie) {
    resetBoard();
    alert("It's a tie!");
    
  } else {
    const isWin = winningCombinations.some((combination) =>
      combination.every((index) => boardArray[index] === currentPlayer)
    );

    if (isWin) {
      if (currentPlayer === "X") {
        playerXscore++;
      } else {
        playerOscore++;
      }
      updateScoreboard();
      gameActive = false; // Turn off the game
      document.getElementById('alertMessage')
      alertMessage.innerHTML = currentPlayer+ 'wins';
     // alert("Player " + currentPlayer + " wins!");
     //alert('you obviously want to play again')
      resetBoard();
    }
  }
};

function resetBoard() {
  boardArray = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  boardLayout();
  getInput();
  gameActive = true; // Turn on the game
  
}

function createScoreboard() {
  let playerswitch = document.getElementById("playerswitch");
  //playerswitch.innerHTML = "X - " + playerXscore + " : " + "O - " + playerOscore;
}

function updateScoreboard() {
  let playerswitch = document.getElementById("playerswitch");
 // playerswitch.innerHTML = "X - " + playerXscore + " : " + "O - " + playerOscore;
}

// Initial setup
boardLayout();
getInput();
createScoreboard();
