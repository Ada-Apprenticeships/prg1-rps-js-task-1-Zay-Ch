const readlineSync = require('readline-sync');

function rockPaperScissors() {
  /**
   * Play a round of Rock Paper Scissors.
   * Prompt both players for their choices and determines the winner.
   */

  const player1Choice = readlineSync.question('Player 1, enter your choice (rock, paper, scissors): ').toLowerCase();
  const player2Choice = readlineSync.question('Player 2, enter your choice (rock, paper, scissors): ').toLowerCase();

  // Define the winning conditions for the classic Rock Paper Scissors game
  const winningConditions = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock'
  };

  // Check if it's a draw
  if (player1Choice === player2Choice) {
    console.log('Draw');
  }
  // Check if player 1 wins
  else if (winningConditions[player1Choice] === player2Choice) {
    console.log('Player 1 Wins');
  }
  // If not, player 2 wins
  else {
    console.log('Player 2 Wins');
  }
}

// Call the function to play the game
rockPaperScissors();