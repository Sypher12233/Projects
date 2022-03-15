let input = 'a whale of a deal! ';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (i = 0; i < input.length; i++){
  for (v = 0; v < vowels.length; v++){
  if (input[i]===vowels[v]){
    resultArray.push(vowels[v]);
  if (input[i]==='e' || input[i]==='u'){
    resultArray.push(input[i]);
  }
  } };
  }
console.log(resultArray.join('').toUpperCase());


/*TWITTER HANDLE: -------AS ALWAYS, FEEL FREE TO DM ME ON TWITTER @uzairkhan123221 REGARDING ANY ISSUES :) ————*/
