// The destructuring returns undefined for the properties: name, surname and old. Try fixing the code without changing the any
//  of the object properties in the constant { id, name, surname, old }.

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

// el id ya coincide con el objeto pero los demas no hay que darles el mismo valor  que la "key" para que funcione
const { id, firstName: name, lastName: surname, age: old } = person; //

console.log(id, name, surname, old);
