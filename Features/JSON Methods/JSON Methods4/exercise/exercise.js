const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};
//  con esto function tambien
// const filteredIdAge = {
//   id: person.id,
//   age: person.age
// };
// const json = JSON.stringify(filteredIdAge); 

const json = JSON.stringify(person, ['id', 'age']);
console.log(json); // Should return: { id: 1, age: 25 }


