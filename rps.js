function rockPaperScissors(player1, player2) {

  const winningConditions = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock']
  };
  /*
  The winningConditions object uses arrays to store the choices that each choice can beat, allowing for easy lookup and checking of winning conditions. 
  Each array contains two elements, representing the two choices that each choice can beat. 
  */

  if (player1 == player2) {
    return 'draw';
  }
  else if (winningConditions[player1] && winningConditions[player1].includes(player2)) {
    return 'player1';
  }
  /*
  This line of code is checking if player1 has won the game. Here's a breakdown of what's happening:
  winningConditions[player1]: This is accessing the winningConditions object and retrieving the array of choices that player1 can beat. For example, if player1 chose "rock", this would retrieve the array ['scissors', 'lizard'].
  winningConditions[player1].includes(player2): This is checking if player2's choice is in the array of choices that player1 can beat. In other words, it's checking if player2 made a choice that player1 can win against.
  So, the entire condition is saying: "If player1 has made a choice that can beat player2's choice, then player1 wins."
  */
  else {
    return 'player2';
  }
}

// rockPaperScissors(player1Choice, player2Choice);


// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}