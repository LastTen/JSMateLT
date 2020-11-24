'use strict';
/*
// всі числа з строки
function calculateGuests(guestsInput) {
  let val = "";
  for (let i = 0; i < guestsInput.length; i++){
    if (+guestsInput[i]){
      val += guestsInput[i]
    }
  }if (+val > 0){
    return +val
  }
  else {
    return 'not a number'
  }
}

calculateGuests('kju666hh5')


function getSuccessRate(statistic) {
  let val = 0;
  for (let i = 0; i < statistic.length; i++){
    if (+statistic[i]){
      val = val + +statistic[i]
    }
  }if (val > 0){
    console.log((Math.round(val / statistic.length) * 100));
    return Math.round((val / statistic.length) * 100)
  }
  else {
    return 0
  }
}
getSuccessRate('11100')

function getSuccessRate(statistic) {
  let val2 = 0;
  let val3 = 0
  for (let i = 0; i < statistic.length; i++){
    if (+statistic[i] > 0){
      val2 = val2 + 1
    }
    if (+statistic[i] === 0){
      val3 = val3 + 1
    }
  }if (val2 > 0){
    console.log(Math.round((val2 / (val2 + val3)) * 100));
    return Math.round((val2 / (val2 + val3)) * 100)
  }
  else {
    return 0
  }

}
getSuccessRate('11cool1-0ok0')

//Порівняня з алфавітом))

let alf = "abcdefghijklmnopqrstuvwxyz"
function isAlphabet(letters) {
  console.log(alf.includes(letters))
  return alf.includes(letters);
}

isAlphabet('abc')


let alf = "aeiouy"
function removeVowels(letters) {
  let strok = ''
  for (let i = 0; i < letters.length; i++){
    if (alf.toLowerCase().includes(letters[i].toLowerCase())){
      console.log();
    }
    else {
      strok = strok +letters[i];
    }
  }
  console.log(strok);
  return strok
}

removeVowels('document')
removeVowels('I like my boss')


function makeAbbr(words) {
  let abr = words.charAt(0)
  let ind = -1
  while(true){
    ind = words.indexOf(' ', ind + 1)
    if (ind == -1) break;
    abr += words.charAt(ind + 1);
  }
  console.log(abr.toUpperCase());
  return abr.toUpperCase()
}
makeAbbr('national aeronautics space administration')

// дешифр задом на перед

function decryptMessage(message) {
  let remes = ""
  for ( let i = message.length - 1; i >= 0; i--){
    remes += message[i]
  }
  console.log(remes);
  return remes
}
decryptMessage('!!!reeb gniknird ekil eW')


function isWerewolf(target) {
  let wWolf = ""
  let reWolf = ""
  for ( let i = target.length - 1; i >= 0; i--){
    if (target[i] !== ' '){
      wWolf += target[i]
    }
  }
  for ( let i = 0; i <target.length; i++){
    if (target[i] !== ' '){
      reWolf += target[i]
    } 
  }
  if (wWolf === reWolf){
    console.log(true);
    return true
  }
  else {
    console.log(false);
    return false
  }
}
isWerewolf('rotator')
*/