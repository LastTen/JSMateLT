/*
//1
function removeLetter(string, letter) {
  let res = '';

  for (let i = 0; i < string.length; i++){
    if (string[i] !== letter){
      res += string[i];
    }
  }
  console.log(res);

  return res;
}
removeLetter('Mate academy', 'a')

//2 
function validatePassword(password) {
  let BIG = 0;
  let litt = 0;
  let Numb = 0;
  let Si = 0;
  let simb = '!@#$%^&*()';
  let alfG = 'ABCDIEFGHIJKLMNOPQRSTUVWXYZ';
  let alnN = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < password.length; i++){
    if (alfG.includes(password[i])){
      BIG += 1;
    }

    if (alnN.includes(password[i])){
      litt += 1;
    }

    if (simb.includes(password[i])){
      Si += 1;
    }

    if (password[i] >= 0){
      Numb += 1;
    }
  }

  if (BIG > 0 && litt > 0 && Numb > 0 && Si < 1 && password.length >7){
    console.log(true);

    return true;
  }
  else {
    console.log(false);

    return false;
  }
}
validatePassword('A@dmiN122')

//3
//Найбільше число

function getLargestNumber(numbers) {
  let num = Math.max(...numbers);

  return num;
}

getLargestNumber([3, 8, 5, 7])

//4
// Видалення з голосною

function removeVowelKeys(object) {
  let golos = 'aeiouyAEIOUY';

  for (let key in object){
    if (golos.includes(key[0])){
      delete object[key];
    }
  }
}

// 5
//середнє значення в масиві обєктів
function getAverageAge(people) {
  let result = 0;

  for (let i = 0; i < people.length; i++){
    let years = people[i].died - people[i].born;

    result += years;
  }

  let scor = Math.ceil(result / people.length);

  console.log(scor);

  return scor;
}

//6
// ATM

function calculateCount(amount) {
  let count = 0;

  if (amount % 10 === 0){
    let s500 = Math.floor(amount / 500)
    let o500 = Math.floor(amount % 500)
    let s200 = Math.floor((o500) / 200)
    let o200 = Math.floor((o500) % 200)
    let s100 = Math.floor((o200) / 100)
    let o100 = Math.floor((o200) % 100)
    let s50 = Math.floor((o100) / 50)
    let o50 = Math.floor((o100) % 50)
    let s20 = Math.floor((o50) / 20)
    let o20 = Math.floor((o50) % 20)
    let s10 = Math.floor((o20) / 10)
    let res = s500 + s200 + s100 + s50 + s20 + s10;

    count = res;
  }
  else {
    count = -1;
  }
  console.log(count);

  return count;
}

calculateCount(550)
*/
