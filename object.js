/*
//  обєднання дяних в нлвий блок

const user = { firstName: 'Ivan', lastName: 'Vasylchenko' };

user.fullName = user.firstName +  ' ' + user.lastName;
console.log(user)


// Видалення ключа з масиву обєктів
function removeFemaleAges(people) {
  for (let i = 0; i < people.length; i++){
    if (people[i].gender === 'female'){
      delete people[i].age
    }
  }
}


//перенесення імені з масиву 
function restoreNames(users) {
  for (let i = 0; i < users.length; i++){
    let res = users[i].fullName.split(' ')
    let res1 = res[0]
    users[i].firstName = res1
  }
}

// перевірка версій робота
function getOutdated(robots, newVersion) {
  let res = []
  for (let i = 0; i < robots.length; i++){
    if (robots[i].core_version < newVersion){
      res.push(i)
    }
  }
  console.log(res);
  return res
}

//рідрахунок символів в строкі
function countBoxes(boxes) {
  let res = {};
  let zmin = boxes[0];

  if (boxes === ''){
    res = {};
    console.log(res);

    return res;
  }

  else{
    for (let i = 0; i < boxes.length; i++){
      if (zmin.includes(boxes[i])){
      }
      else {
        zmin += boxes[i];
      }
    }

    for (let i = 0; i < zmin.length; i++){
      res[zmin[i]] = 0
    }

    for (let i = 0; i < boxes.length; i++){
      if (boxes[i] === zmin[0]){
        res[zmin[0]] += 1;
      }

      if (boxes[i] === zmin[1]){
        res[zmin[1]] += 1;
      }

      if (boxes[i] === zmin[2]){
        res[zmin[2]] += 1;
      }

      if (boxes[i] === zmin[3]){
        res[zmin[3]] += 1;
      }

      if (boxes[i] === zmin[4]){
        res[zmin[4]] += 1;
      }

      if (boxes[i] === zmin[5]){
        res[zmin[5]] += 1;
      }

      if (boxes[i] === zmin[6]){
        res[zmin[6]] += 1;
      }

      if (boxes[i] === zmin[7]){
        res[zmin[7]] += 1;
      }
    }
    console.log(res);

    return res;
  }
}


function getRobotSchema(robot) {
  let res1 = [];

  for (let key in robot){
    let keys = key;
    let types = typeof(robot[key]);
    let res = [keys, types ];

    res1.push(res);
  }
  console.log(res1);

  return res1;
}

const robot = {
  version: 16,
  name: 'Cleaner 3000',
  coords: [345, 12],
};

getRobotSchema(robot)
*/
