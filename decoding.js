/*
function decodeSignal(input) {
  let value = Boolean(input)
  let ret = Number(value)
  console.log(ret);
  return ret
}

decodeSignal("d")

const getWinner = function(maxSolved, romanSolved){
  let max = Number(maxSolved)
  let roman = Number(romanSolved)

  if (max > roman){
    console.log("Max winner!!!");
    return `Max winner!!!`
  }
  if (max < roman){
    console.log("Roman winner!!!");
    return `Roman winner!!!`
  }
  if (max === roman){
    console.log("Roman and Maxim are the winners!!!");
    return `Roman and Maxim are the winners!!!`
  }

}
getWinner(45, '45')

const getGuestsCount = function(guestsInput){
  let gues = parseInt(guestsInput)
  let boo = Boolean(gues)
  if (gues === 0){
    console.log(0);
    return 0
  }
  if (boo === true){
    console.log(gues);
    return gues;
  }
  else {
    console.log('not a number');
    return 'not a number';
  }

}


getGuestsCount("0");


function getStatistic(name, answer) {
  let nameUs = name
  let resultUs = Boolean(answer)

  if (answer === "-" || answer === ""){
    console.log(`${nameUs} doesn't understand`);
    return `${nameUs} doesn't understand`
  }
  if (answer === "0" || answer === "0000"){
    console.log(`${nameUs} doesn't understand`);
    return `${nameUs} doesn't understand`
  }
  if (resultUs == true){
    console.log(`${nameUs} understands`);
    return `${nameUs} understands`
  }
  if (resultUs === false){
    console.log(`server error`);
    return `server error`
  }
}

getStatistic('Boris', '')


//------ Логічні оператори та , і))-----
function canTheyBook(adultsCount, childrenCount = 1) {
  let adult = Boolean(adultsCount)
  let chboo = Boolean(childrenCount)
  let child = childrenCount / 2

  if (adult > 0 && adult <= 8 && adultsCount >= child && adultsCount + childrenCount <=8){
    console.log(true);
    return true
  }
  if (chboo === false){
    console.log(false);
    return false
  }
  else {
    console.log(false);
    return false
  }
}

canTheyBook(9)



function canTheyBook(adultsCount, childrenCount = 0, babiesCount = 0) {
  let adult = Boolean(adultsCount)
  let child = childrenCount + babiesCount / 2

  if (adultsCount > 0 && adultsCount + childrenCount + babiesCount <= 9 && adultsCount + childrenCount <= 8 && adultsCount + 1 >= child){
    console.log(adult);
    return adult
  }
  else{
    console.log(false);
    return false
  }
}

canTheyBook(8, 1, 0)


function recommendRoom(adultsCount, childrenCount = 0, babiesCount = 0) {
  
  let child = childrenCount + babiesCount / 2

  if (adultsCount > 0 && adultsCount + childrenCount + babiesCount <= 4){
    console.log('small room');
    return 'small room'
  }
  if (adultsCount > 0 && adultsCount + childrenCount + babiesCount <= 5 && adultsCount + childrenCount <= 4 && adultsCount + 1 >= child){
    console.log('small room + extra bed');
    return 'small room + extra bed'
  }
  if (adultsCount > 0 && adultsCount + childrenCount + babiesCount <= 8){
    console.log('big room');
    return 'big room'
  }
  if (adultsCount > 0 && adultsCount + childrenCount + babiesCount <= 9 && adultsCount + childrenCount <= 8 && adultsCount + 1 >= child){
    console.log('big room + extra bed');
    return 'big room + extra bed'
  }
}
recommendRoom(2)
*/
