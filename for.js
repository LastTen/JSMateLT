/*
let i = 0
for (; i < 10; i++){
  if (i % 2 !== 0){
    continue;
  }
  console.log(i);
  console.log('OK');
}
console.log(`___DONE___`);
console.log(i);


let i = 1;

for (;;) {
  if (i >=3) {
    break;
  }

  console.log(i);
  console.log('OK');

  i++;
}
console.log(`___done___`);


//While
let n = 1240;
let count = 0;

while (n % 2 === 0) {
  n = n / 2;
  console.log(n);

  count ++;
}
console.log(count);

function getDrinksWithStep(guests, step){
  let sum = 0;
  for (let i = 1; i <= guests; i+= step){
    sum = sum + i
  }
  console.log(sum);
  return sum
}
getDrinksWithStep(5, 3)

// підрахцнок відсотків дипозит
function calculateProfit(amount, percent, period) {
  let sum = amount;
  let vids = percent / 100
  for (let i = 1; i <= period; i++){
    sum = sum + (sum * vids)
  }
  console.log(sum - amount);
  return (sum - amount)
  //return sum
}
calculateProfit(12500, 3, 12)


function getYears(amount, percent, expectedLimit) {
  let n = amount;
  let count = 0;
  let vids = percent / 100
  while (n + (n * vids) <= expectedLimit) {
    n = n + n * vids
    
    count++
    console.log(n);
  }

  console.log(count);
  return (count);
  //return sum
}

getYears(1600, 10, 2000)
*/


function getDrinsks(guest){
  let sum = 0;
  for ( let i = 0; i < guest; i++){
    sum = sum + i;
  }
  console.log(sum);
  return sum
}
getDrinsks(5)