// let's start over again
// BREAK THE PROBLEM INTO MULTIPLE PIECES YOU DUMB F*** STOP TRYING TO MAKE IT ONE BIG PIECE
//EVEN THOUGH IT IS A BIG PIECE, BREAK IT THE F*** DOWN
let boardArray = [" ", " ", " ", " ", " ", " ", " ", " ", " "]; // create the board as an array
CurrentPlayer = "X"
//let gameON =True; 

function boardLayout()
{
let outputElement = document.getElementById("output"); // access the div I want to display

// Create the grid structure
outputElement.innerHTML = "<div class='grid-container'></div>";

// Access the grid container
let gridContainer = document.querySelector(".grid-container");

boardArray.forEach((item) => { // this is the heart of making the UI
  // Create a grid item for each array element
  let gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");
  gridItem.textContent = item;

  // Append the grid item to the grid container
  gridContainer.appendChild(gridItem);
});
}
/*function HorizontalWin
{
if 1 is the same as 2 and 3 a player wins
}
*/
function resetButton() // this is my reset button funciton. when it is pressed, it invokes the board layout function
{
   //"<div class = 'button'> <button id ='reset'></button></div>"
}
boardLayout();
