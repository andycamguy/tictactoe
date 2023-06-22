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

boardArray.forEach((item) => { // this is making the grid
  // Create a grid item for each array element
  let gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");
  gridItem.textContent = item;

  // Append the grid item to the grid container
  gridContainer.appendChild(gridItem);
});
}
let turns = [];
let clicks = 0;
function getInput() {
    let gridItems = document.getElementsByClassName("grid-item"); //this grabs the grid and its items even if they are blank
  
    Array.from(gridItems).forEach((item, index) => { // this mofo line is magic
      item.addEventListener("click", function () {
        // Add a click event listener to each grid item
        if (boardArray[index] === " ") {
          // Check if the grid item is empty
          boardArray[index] = CurrentPlayer; // Update the boardArray with the current player's symbol
          gridItems[index].textContent = CurrentPlayer; // Update the displayed symbol in the grid item
          // Perform any other actions you need here based on the click event
        }
        Playerswitch();
        clicks++;
        console.log(clicks);
        console.log(boardArray)
        winConditions();
      });
      
    });

  }
  function winConditions()
  {
    let wincon=document.getElementById("winConditions")
    const isTie = boardArray.every(item => item !== " "&& clicks > 8);
   // const Win = ;
    if(isTie){wincon.innerHTML = "It is a tie"; console.log('it is a tie');}
// either give all the comobs of winning or create a method to check and see how to use array pieces to filter

  }
  function Playerswitch()
  {

    if (CurrentPlayer === "X")
    {
        CurrentPlayer = "O";
    }
    else
    {
        CurrentPlayer="X";
    }
  }
/*function HorizontalWin
{
if 1 is the same as 2 and 3 a player wins
}
*/
/*
function resetButton() // this is my reset button funciton. when it is pressed, it invokes the board layout function
{
    let outputElement = document.getElementById("output");
   outputElement.innerHTML ="<div class = 'button'> <button id ='reset'></button></div>"
}
*/
boardLayout();
getInput(); // don't forget to call your functions at the end
// resetButton();
