'use strict';
/*
//створенняя масивів
function makeStickers(countOfDetails, robotPart) {
  const arr = []
  for (let i = 0; i < countOfDetails; i++){
    arr[i] = `${robotPart} detail #${(i + 1)}`
  }
  console.log(arr);
  return arr
}
makeStickers(5, 'Body')

// подвоєня масиву
function doublePower(currentPowers) {
  for (let i = 0; i < currentPowers.length; i++ ){
    currentPowers[i] = currentPowers[i] * 2
  }
  console.log(currentPowers);
  return currentPowers
}

doublePower([100, 150, 200, 220])

// більше менше середнє
function getSpeedStatistic(testResults) {
  const biger = Math.max(... testResults);
  const miner = Math.min(... testResults);
  const res = [];
  let sum = 1;
  for (let i = 0; i < testResults.length; i++){
    sum += testResults[i]
  };
  const centr = Math.floor((sum -1) / testResults.length);
  if (centr){
    res.push(miner, biger, centr)
  }
  else {
    res.push(0, 0, 0)
  };
  console.log(res);
  return res
}

getSpeedStatistic([5])


// порівняння суми масивів
function compareRobots(firstRobotResults, secondRobotResults) {
  let firstR = 0;
  let secondR = 0;

  for (let i = 0; i < firstRobotResults.length; i++){
    firstR += (firstRobotResults[i]);
  }

  for (let i = 0; i < secondRobotResults.length; i++){
    secondR += (secondRobotResults[i]);
  }

  if (firstR > secondR){
    console.log('First robot for sale!');

    return 'First robot for sale!';
  }

  if (firstR < secondR){
    console.log('Second robot for sale!');

    return 'Second robot for sale!';
  }

  if (firstR === secondR){
    console.log('Both robots for sale!');

    return 'Both robots for sale!';
  }
}
compareRobots([12, 4, 13], [10, 1, 4, 5, 12])

// сортуваня масиву
function isSorted(boxes) {
  let str = '';
  let sort = '';

  for (let i = 0; i < boxes.length; i++){
    str += boxes[i];
  }

  for (let i = 0; i < boxes.length; i++){
    sort += boxes.sort()[i];
  }

  if (str === sort){
    console.log(true);

    return true;
  } else {
      console.log(false);

      return false;
  }
}

isSorted([0, 1, 2, 2, 2, 3, 'a', 'b', 'w'])

// геолокація робота

function getLocation(coordinates, commands) {
  let x = coordinates[0];
  let y = coordinates[1];

  for (let i = 0; i < commands.length; i++){
    if(commands[i] === 'forward'){
      y = y + 1;
    }

    if(commands[i] === 'back'){
      y = y - 1;
    }

    if(commands[i] === 'right'){
      x = x + 1;
    }

    if(commands[i] === 'left'){
      x = x - 1;
    }
  }
  coordinates[0] = (x);
  coordinates[1] = (y);
  console.log(coordinates);

  return coordinates;
}
getLocation([0, 0], ['forward', 'right'])

// прогнозування відсотків
function getPlan(currentProduction, months, percent) {
  const proc = [];
  const per = percent / 100;
  let sum = currentProduction;

  for (let i = 0; i <= months -1; i++){
    sum = Math.floor(sum) + Math.floor(sum) * per;
    proc [i] = Math.floor(sum);
  }
  console.log(proc);

  return proc;
}
getPlan(20, 6, 67);
*/
