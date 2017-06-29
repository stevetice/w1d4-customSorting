var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function(a, b) {
  var nameA = a.name, nameB = b.name;
  var ageA = a.age, ageB = b.age;
// Sort names alphabetically A-Z
  if (nameA < nameB) {
    return -1
  }
  if (nameA > nameB) {
    return 1
  }
  // If names are equal sort by age
  if (nameA === nameB){
    if (ageA < ageB) {
      return -1
    }
    if (ageA > ageB) {
      return 1
    }
    // Default return if age values are equal - no sorting occurs
    return 0
  // Deafault return if name values are equal - no sorting occurs
  }
  return 0
});

console.log(students);






