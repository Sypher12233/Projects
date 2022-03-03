/*
*)Rock, Paper, or Scissors
*)Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.
*)The possible outcomes are:
1)Rock destroys scissors.
2)Scissors cut paper.
3)Paper covers rock.
*)If there’s a tie, then the game ends in a draw.     


HERE IS THE CODE!!      */



const getUserChoice = userInput => {
     userInput = userInput.toLowerCase();
     if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
     return userInput;
   } else {
     console.log('Error!'); 
   } 
   };
const getComputerChoice = () => { randomNumber = Math.floor(Math.random()* 3);
     switch (randomNumber) {
     case 0:
     return 'rock';
     break;
     case 1:
     return 'paper';
     break;
     case 2:
     return 'scissors';
     break;}
     
   };
function determineWinner(userChoice, computerChoice){
          if (userChoice === 'rock' && computerChoice === 'paper'){
     return 'The computer won!';
   } else if (userChoice === 'paper' && computerChoice === 'rock'){ 
     return 'The user won!';
   } else if (userChoice === 'scissors' && computerChoice === 'rock'){
     return 'The computer won!';
   } else if (userChoice === 'rock' && computerChoice === 'scissors'){
     return 'The user won!';
   } else if (userChoice === 'scissors' && computerChoice === 'paper'){
     return 'The user won!';
   } else if (userChoice === 'paper' && computerChoice === 'scissors'){
     return 'The computer won!'; 
   } else if (userChoice === computerChoice){
     return 'Match tied';
   } else if (userChoice === 'bomb'){
     return 'The user won by using a secret weapon!!'};
   };
     
const playGame = () => {
     let userChoice = getUserChoice('scissors');       //    <=type your choice instead of 'scissors' and run the code. 
     let computerChoice = getComputerChoice();
     console.log('You threw: ' + userChoice);
     console.log('The computer threw: ' + computerChoice);
     console.log(determineWinner(userChoice, computerChoice));
   };
     
playGame();


/*TWITTER HANDLE: -------AS ALLWAYS, FEEL FREE TO DM ME ON TWITTER @uzairkhan123221 REGARDING ANY ISSUES :) ————*/
