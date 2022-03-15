let userName = 'User';//part 1
let userQuestion = 'I\'m here to know my fortune';//part 3
const randomNumber = Math.floor(Math.random()*8);//part 5
let eightBall = '';
userName ? console.log(`Hello, ${userName}!`) :
console.log('Hello!');//part 2
console.log('If you want to ask eight ball something, Hit the enter key')
userQuestion ? console.log(`The eight ball answered: ${eightBall}`) : console.log('Please enter your question between the two \'\' in the variable userQuestion')

if (randomNumber === 1){
  console.log('Reply hazy try again');
} else if (randomNumber === 2){
  console.log('Can\'t predict now');
} else if (randomNumber === 3){
  console.log('It\'s decidedly so');
} else if (randomNumber === 4){
  console.log('My sources say no');
} else if (randomNumber === 5){
  console.log('Signs point to yes');
} else if (randomNumber === 6){
  console.log('Do not count on it');
} else if (randomNumber === 7){
  console.log('Outlook not so good');
} else if (randomNumber === 8){
  console.log('It is decidedly so');
} else console.log('Try again');

/*TWITTER HANDLE: -------AS ALLWAYS, FEEL FREE TO DM ME ON TWITTER @uzairkhan123221 REGARDING ANY ISSUES :) ————*/ 
