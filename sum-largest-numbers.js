const sumLargestNumbers = function(data) {
  data.sort((a, b) => a - b);
  return data.pop() + data.pop();
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));