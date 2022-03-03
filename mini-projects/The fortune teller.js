let userName = '';//part 1
let userQuestion = '';//part 3
const randomNumber = Math.floor(Math.random()*8);//part 5
let eightBall = '';
  userName ? console.log(`Hello, ${userName}!`) :
  console.log('Hello!');//part 2
  
switch (randomNumber){
  case 0 :
  eightBall = ('Reply hazy try again');
  break;
  case 1 :
  eightBall = ('Cannot predict now');
  break;
  case 2 :
  eightBall = ('It is decidedly so');
  break;
  case 3 :
  eightBall = ('My sources say no');
  break;
  case 4 :
  eightBall = ('Signs point to yes');
  break;
  case 5 :
  eightBall = ('My sources say no');
  break;
  case 6 :
  eightBall = ('Outlook not so good');
  break;
  case 7 :
  eightBall = ('It is decidedly so');
  break;
  case 8 :
  eightBall = ('It is certain');
  break;
  default :
  eightBall = ('Try again!');
  break;
} 

userQuestion ? console.log(`The eight ball answered: ${eightBall}`) : console.log('Please enter your question between the two \'\' in the variable userQuestion')


/*TWITTER HANDLE:-------AS ALLWAYS, FEEL FREE TO DM ME ON TWITTER @uzairkhan123221 REGARDING ANY ISSUES :) ————*/
