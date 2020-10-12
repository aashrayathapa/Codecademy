let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}// Function to generate a random number between 0 and 9

//Function to compare difference between target and each guess and output winner
const compareGuesses = (human,computer,target) => {
  const HumanDifference = (target, human) => {
    Math.abs(target - human);
  }
  const CompDifference = (target, computer) => {
    Math.abs(target - computer);
  }

  if(HumanDifference < CompDifference){
    console.log('You win!');
    return true;
  }
  else if(CompDifference < HumanDifference){
    console.log('Computer wins');
    return false;
  }
  else if(CompDifference === HumanDifference){
    console.log('You win!');
    return true;
  }
  else {
    console.log('Try again');
  }

}

//Function to increase winners score after each round
const updateScore = winner => {
  if(winner === 'human'){
    humanScore ++;
  }
  else{
    computerScore ++;
  }
}

//Function to update round number after each round
const advanceRound = () => {
  currentRoundNumber ++;
}


