// let's start over again
// BREAK THE PROBLEM INTO MULTIPLE PIECES YOU DUMB F*** STOP TRYING TO MAKE IT ONE BIG PIECE
//EVEN THOUGH IT IS A BIG PIECE, BREAK IT THE F*** DOWN
let CurrentPlayer = 'X';
let boardArray = [1,2,3,4,5,6,7,8,9] // create the board as an array

let outputElement = document.getElementById("output");// access the div I want to display

boardArray.forEach((item) => {
    outputElement.innerHTML += item + "<br>"; // append the item to the innerHTML
  });
