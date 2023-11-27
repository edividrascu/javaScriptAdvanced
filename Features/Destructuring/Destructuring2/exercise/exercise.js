// Utilice la desestructuración para asignar los valores solo con una línea de código.
const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

// const id = person.id;
// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;


let {id, firstName, lastName, age} = person

console.log(id, firstName, lastName, age);






// https://www.youtube.com/watch?v=sNbKgnnfASQ apuntes reapidos para acordarme 