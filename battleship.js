// initializes the variables
var rows = 10;
var cols = 10;
var squareSize = 50;
var scoreFirstPlayer = 0;
var scoreSecondPlayer = 0;
var turn = 1;
var currentPlacement = '';
// initial hit count is set to 0
var hitCount = 0;

var gameBoardContainer = document.getElementById("gameboard");

// initial game board values are all 0 because they're not set yet
var gameBoard = [
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0,0]
				]

// they change 0 values from the game board into 1s if there are ships
// for aircraft carrier
for (var x = 0; x < 13; x+=3){
	currentPlacement = carrier.charAt(x)+carrier.charAt(x+1);
	setGameBoard(currentPlacement);
}
// for battleship
for (var x = 0; x < 10; x+=3){
	currentPlacement = battleship.charAt(x)+battleship.charAt(x+1);
	setGameBoard(currentPlacement);
}
// for submarine
for (var x = 0; x < 7; x+=3){
	currentPlacement = submarine.charAt(x)+submarine.charAt(x+1);
	setGameBoard(currentPlacement);
}

// function that takes in user input and sets the values to 1
function setGameBoard(placement){
	if (placement.charAt(0) == 'A'){
		gameBoard[0][parseInt(placement.charAt(1))-1]=1;
	}
	else if (placement.charAt(0) == 'B'){
		gameBoard[1][parseInt(placement.charAt(1))-1]=1;
	}
	else if (placement.charAt(0) == 'C'){
		gameBoard[2][parseInt(placement.charAt(1))-1]=1;
	}
	else if (placement.charAt(0) == 'D'){
		gameBoard[3][parseInt(placement.charAt(1))-1]=1;
	}
	else if (placement.charAt(0) == 'E'){
		gameBoard[4][parseInt(placement.charAt(1))-1]=1;
	}
	else if (placement.charAt(0) == 'F'){
		gameBoard[5][parseInt(placement.charAt(1))-1]=1;
	}
	else if (placement.charAt(0) == 'G'){
		gameBoard[6][parseInt(placement.charAt(1))-1]=1;
	}
	else if (placement.charAt(0) == 'H'){
		gameBoard[7][parseInt(placement.charAt(1))-1]=1;
	}
	else if (placement.charAt(0) == 'I'){
		gameBoard[8][parseInt(placement.charAt(1))-1]=1;
	}
	else if (placement.charAt(0) == 'J'){
		gameBoard[9][parseInt(placement.charAt(1))-1]=1;
	}
}


gameBoardContainer.addEventListener("click", fireTorpedo, false);

// displays that it's the first person's turn
setTimeout(function(){alert("It's " + person1 + "'s turn!")}, 100);

// display initital scores of the players
document.getElementById("scoreFirstPlayer").innerHTML=scoreFirstPlayer;
document.getElementById("scoreSecondPlayer").innerHTML=scoreSecondPlayer;

// checks if the parameter value is even
function isEven(n) {
   return n % 2 == 0;
}

// manages what happens when user clicks on a tile - either hit or miss
function fireTorpedo(e) {

	if (e.target !== e.currentTarget) {

		var row = e.target.id.substring(1,2);
		var col = e.target.id.substring(2,3);
				
		// if a player clicks a tile with no ship, it changes the tile to white
		if (gameBoard[row][col] == 0) {

			e.target.style.background = '#fff';
			// set this square's value to 3 to indicate that they fired and missed
			gameBoard[row][col] = 3;
			turn++;
			} 

			// if player clicks a tile with a ship, it changes the tile to red
			else if (gameBoard[row][col] == 1) {

			e.target.style.background = 'red';
			// set this square's value to 2 to indicate the ship has been hit
			gameBoard[row][col] = 2;
			// hit count goes up by 1
			hitCount++;

			// checks whose turn it was and adds +2 to their score
			if (isEven(turn))
			scoreSecondPlayer+=2;
			else
			scoreFirstPlayer+=2;

			// turn goes up and it goes to the next person
			turn++;
			
			// sends the scores to html page
			document.getElementById("scoreFirstPlayer").innerHTML=scoreFirstPlayer;
			document.getElementById("scoreSecondPlayer").innerHTML=scoreSecondPlayer;

			// if all ships are hit, it displays who is the winner
			if (hitCount == 12) {
				if (scoreFirstPlayer>scoreSecondPlayer)
					alert(person1 + " wins!");

				else
					alert(person2 + " wins!");
			}

		} else if (gameBoard[row][col] > 1) {
			alert("You already hit on this tile!");
		}
		// checks whose turn it is by looking if the turn number is even or odd
		if (isEven(turn))
			setTimeout(function(){alert("It's " + person2 + "'s turn!")}, 100);
    	else
    		setTimeout(function(){alert("It's " + person1 + "'s turn!")}, 100);
	
    }
        gameBoardContainer = document.getElementById("gameboard1");

    e.stopPropagation();

}

// creates the board using columns and rows
for (i = 0; i < cols; i++) {
	for (j = 0; j < rows; j++) {
		
		var square = document.createElement("div");
		gameBoardContainer.appendChild(square);

		square.id = 's' + j + i;			
		
		var topPosition = j * squareSize;
		var leftPosition = i * squareSize;			
		
		square.style.top = topPosition + 'px';
		square.style.left = leftPosition + 'px';						
	}
}

