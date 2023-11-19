function sortPeopleByAge(arr) {
  // Utiliza el método sort para ordenar el array de personas por edad de menor a mayor 
  const sortedPeople = arr.sort((a, b) => a.age - b.age);
 //sort toma dos parametros     a y b
  return sortedPeople;
}

const people = [
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

const sortingByAge = sortPeopleByAge(people)
console.log(sortingByAge)