/*
//  Роки в століття\

function getCentury(year) {
  let num = year / 100
  let numb = Math.ceil(num)
  console.log(numb);
}
getCentury(2000);

// Конвертор
function convertCurrency(amount, exchangeRate, currencyName) {
  const test = amount * exchangeRate
  const rat1 = test.toFixed(2).replace(/\.?0+$/, '')
  console.log(rat1);

  console.log(`Give them ${rat1} ${currencyName}('s)`)
  return `Give them ${rat1} ${currencyName}('s)`
}
// test.toFixed(2).replace(/\.?0+$/, '') остання частина відкидає нулі та клму зі строки
convertCurrency(1000, 0.037, 'zloty')


function getRectangleArea(side, diagonal) {
  const sq = side * Math.sqrt((diagonal*diagonal)-(side*side))
  const rsq = +sq.toFixed(2).replace(/\.?0+$/, '')
  if (diagonal > side && side && diagonal){
    console.log(rsq);
    return rsq
  }
  else {
    console.log('not a rectangle.');
    return 'not a rectangle.'
  }
}

getRectangleArea(10, 20)


function isEven(number) {
  const ev = number % 2

  if (ev === 0){
    console.log(true);
    return true
  }
  else {
    console.log(false);
    return false
  }
}
isEven(100)



//Кількість пального
function makeDecision(fuelRemaining, distance, fuelConsumption) {
  const full = fuelRemaining * 100 / fuelConsumption
  console.log(full);
  if (fuelRemaining > 0 && full >= distance){
    console.log('reach gas station by themselves');
    return 'reach gas station by themselves'
  }
  else {
    console.log('ask for help');
    return 'ask for help'
  }
}

makeDecision(3, 34, 6.5)


function trukytnuk(storA, storB, storC) {
  let ls = (storA * storA) - (storB * storB)
  let pif1 = (storB * storB) + (storA * storA)
  let pif = (storB * storB) - (storA * storA)
  let c = (storC * storC)
  if (pif === c || ls === c || pif1 === c ){
    console.log('прямокутний');
  }
  else {
    console.log('ні')
  }
  
}

trukytnuk(3, 4, 5)
trukytnuk(5, 4, 3)
trukytnuk(3, 1, 5)
trukytnuk(4, 5, 3)
*/