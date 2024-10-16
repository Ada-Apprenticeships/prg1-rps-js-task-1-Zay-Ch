// const readlineSync = require('readline-sync');

// const player1Choice = readlineSync.question('Player 1, Enter your choice: ').toLowerCase()
// const player2Choice = readlineSync.question('Player 2, Enter your choice: ').toLowerCase()

function rockPaperScissors(player1, player2) {

  const winningConditions = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock']
  };
  
  if (player1 == player2) {
    return 'draw';
  }
  else if (winningConditions[player1] && winningConditions[player1].includes(player2)) {
    return 'player1';
  }
  else {
    return 'player2';
  }
}

// rockPaperScissors(player1Choice, player2Choice);


// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}