# Rules
- Players take turns putting their marks in empty squares. 
- The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner. 
- When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.

## Procedural

### Beginm

### INIT
There are 2 players just like what the rules said, one gets the letter X and the other the letter O
Question: are the letters part of state?

#### The board
![image](https://github.com/andycamguy/tictactoe/assets/134294344/e8d89d7f-38eb-412e-b851-0f9f7232479e)

* How do we keep track of the board, is it an array? Probably. I would do it that way
* Question: is the board state visually? I don't see why not, it saves data in a visual manner. it is written data and you can read the data

* Atomic design - who is the customer? desktop or Mobile?
- Atoms 
  text that displays X or O
  button to click or give an input
- Molecules 
  the tile(display, button) - it could have state
  player tile 
  reset button
- Organism
  the game board

- How does a player win? what are the win conditions?
https://www.google.com/search?q=how+to+play+tic+tac+toe&sxsrf=APwXEdevv3X9TqI46Om6J66UYAuuIs4Igg:1687208566184&source=lnms&tbm=vid&sa=X&ved=2ahUKEwicjf_ZndD_AhUGl4kEHTkpD9QQ_AUoAXoECAIQAw&biw=1280&bih=589#fpstate=ive&vld=cid:ce75581c,vid:USEjXNCTvcc

 There are 8 different win conditions in the game
-  2 of them are three in a row diagonally
-  3 are from 3 in a row horizontally
-  3 are from 3 in a row vertically
    if any one of these win conditions are true, player wins
    HINT: you have to FILTER THROUGH any of these conditions
### The player object    
Player = {
symbol: " " this is the choice between X or O, do we wish to hard code in the players assignment or give the choice?
}
Honestly it can be a state where it checks to see whose turn it is
Turns = [ ]; We make turns an array to keep track of state to look back at prior turns and see how many turns were made
OR

CurrentPlayer = null; //eventually will mean it will be X or O
END

## Functional
``` pseudocode
function Create_the_board()
{
if(beginning of game or game reset) then
  {
  clear set board
  create grid of 3 by 3
  all blank in each tile
  }
}

function player_assignment()
(
if input received and player symbol is X
{player symbol is now O}
else
{player symbol is now X}

}
// I want this code to be expandable to larger game boards, not just three in a row so it is not wet code. that way I could make connect 4 if i wanted to. not likely

function wincon horizontal
{
if any row is the same symbol, a player wins
}
function wincon vertical
(
if any column is the same symbol a player wins
}

function wincon diagonal
{
if any diagonal is the same symbol, a player wins
}

function tiecheck
{
if 9 turns have passed and there are no more empty spaces not meeting a condition, tis a tie
}
```
## Object-Oriented
![image](https://github.com/andycamguy/tictactoe/assets/134294344/e8d89d7f-38eb-412e-b851-0f9f7232479e)

The board as an organism has multiple properties that stores values in 9 coordinates that can be interacted with at anytime under conditions. 
It can be interacted as long as no player has chosen that coordinate

To take it further with the organism: it can be replicated and saved in array under the Turns array to see which tile was chosen in the turn and which player.

