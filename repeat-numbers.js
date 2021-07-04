const repeatNumbers = function(data) {
  let result = [];
  for(let input of data) {
    const [digit, repeat] = input;
    result.push(String(digit).repeat(repeat));
  }
  return result.join(', ');
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));