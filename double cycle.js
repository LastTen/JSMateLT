/*
function friend(friends){

  let res = []
  for (let i = 0; i < friends.length; i++){
    if (friends[i].length === 4){
      res.push(friends[i])
    }
  }
  console.log(res);
  return res
}

friend(["Ryan", "Kieran", "Mark"])
*/

function stok(werf){
  let res = ''
  let j = werf.length;
  for (i = 0; i < werf.length; i++){
    j--
    if (werf[j] === werf[i]){
      res += werf[i]
    }
  }
  if (res === werf){
    console.log(true);
  }
  else{
    console.log(false);
  }
}
stok('123321')

