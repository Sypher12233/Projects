const getSleepHours = day => {
  switch (day){
    case 'Monday':
    return 9;
    break;
    case 'Tuesday':
    return 7;
    break;
    case 'Wednesday':
    return 9;
    break;
    case 'Thursday':
    return 8;
    break;
    case 'Friday':
    return 7;
    break;
    case 'Saturday':
    return 8;
    break;
    case 'Sunday':
    return 6;
    break;
    default :
    return 'Please input a valid day'
  }
}; 
const getActualSleepHours = () => 
  9 + 7 + 9 + 8 + 7 + 8 + 6;
console.log(getActualSleepHours())
const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7; 
};
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours){
    return ('You got perfect sleep!')
  } else if (actualSleepHours > idealSleepHours){
    return ('you got ' + (actualSleepHours - idealSleepHours) + 'hour(s) more sleep!')
  } else {
    return ('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.')
  }
};
console.log(calculateSleepDebt());


/*TWITTER HANDLE: -------AS ALLWAYS, FEEL FREE TO DM ME ON TWITTER @uzairkhan123221 REGARDING ANY ISSUES :) ————*/
