const whereCanIPark = function (spots, vehicle) {
  let re;
  if(vehicle === 'regular') { re = 'R' }
  else if(vehicle === 'small') { re = 'RS' }
  else if(vehicle === 'motorcycle') { re = 'RSM' }

  let row, col;
  for(let row = 0; row < spots.length; row++) {
    col = spots[row].findIndex(spot => re.includes(spot))
    if(col != -1) return [col, row]
  }
  return false;
  // let result = false;
  // spots.forEach((value, row) => {
  //   value.forEach((spot, col) => {
  //     if(re.includes(spot)) { result = [col, row] }
  //   });
  // });
  // //will return the very last spot available since forEach goes through all of them
  // return result;
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))