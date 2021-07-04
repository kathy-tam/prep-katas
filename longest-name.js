const instructorWithLongestName = function(instructors) {
  const nameLengths = instructors.map(instructor => instructor.name.length);
  return instructors[nameLengths.indexOf(Math.max(...nameLengths))];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));