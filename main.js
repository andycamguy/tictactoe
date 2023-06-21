let CurrentPlayer = 'X'
 //define the UI and create the game board brain of 
    let gameboard = {
      tile_one: {
        display: document.getElementById("tile1"),
        input: function() {
          this.symbol = 'X';
          this.display.innerText = this.symbol;
          console.log('hello');
        },
        symbol: ''
      }
    };
  
    gameboard.tile_one.display.addEventListener('click', gameboard.tile_one.input);
  });
 
  
  
  
