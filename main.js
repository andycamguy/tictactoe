// let's start over again
// BREAK THE PROBLEM INTO MULTIPLE PIECES YOU DUMB F*** STOP TRYING TO MAKE IT ONE BIG PIECE
//EVEN THOUGH IT IS A BIG PIECE, BREAK IT THE F*** DOWN
let boardArray = [" ", " ", " ", " ", " ", " ", " ", " ", " "]; // create the board as an array
CurrentPlayer = "X";
let game = true;
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
let playerXinputs = [];
let playerOinputs = [];

function boardLayout() {
  let outputElement = document.getElementById("output"); // access the div I want to display

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

let clicks = 0;

function getInput() {
  let gridItems = document.getElementsByClassName("grid-item");

  Array.from(gridItems).forEach((item, index) => {
    item.addEventListener("click", function () {
      if (boardArray[index] === " ") {
        boardArray[index] = CurrentPlayer;
        gridItems[index].textContent = CurrentPlayer;

        if (CurrentPlayer === "X") {
          playerXinputs.push(index);
        } else {
          playerOinputs.push(index);
        }

        winConditions();
        Playerswitch();
        clicks++;
      } else {
        checkInput();
      }
    });
  });
}

const checkInput = () => {
  let wincon = document.getElementById("winConditions");
  wincon.innerHTML = "This space is already taken!";
};

const winConditions = () => {
  let wincon = document.getElementById("winConditions");

  const isWin = winningCombinations.some((combination) =>
    combination.every((index) => boardArray[index] === CurrentPlayer)
  );

  if (isWin) {
    wincon.innerHTML = `Player ${CurrentPlayer} wins`;
    game = false;
  } else if (boardArray.every((item) => item !== " ") && !isWin) {
    wincon.innerHTML = "It is a tie";
    game = false;
  }
};

function Playerswitch() {
  if (CurrentPlayer === "X") {
    CurrentPlayer = "O";
  } else {
    CurrentPlayer = "X";
  }
}

boardLayout();
getInput();
