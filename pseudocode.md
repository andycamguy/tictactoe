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
  the whole board

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

Turns = []; We make turns an array to keep track of state to look back at prior turns and see how many turns were made


END

## Functional

Create the board



