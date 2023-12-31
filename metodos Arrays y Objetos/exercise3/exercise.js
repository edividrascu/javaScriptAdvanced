// Create a function called `ageAverage` that takes in an array of people and returns the average age.
// Look at the [reduce] and [Math.round]
function calculateAverageAge(persons) {
  const sumatorio = persons.reduce(function(acumulador, person) {
    return acumulador + person.age;
  }, 0);

  return Math.round(sumatorio / persons.length);
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const average = calculateAverageAge(persons);
console.log(average);
console.log(persons);
