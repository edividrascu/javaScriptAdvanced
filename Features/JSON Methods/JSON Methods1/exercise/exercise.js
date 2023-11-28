class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const developer = new Person(1, 'Mario', 'Rossi', 25);
const jsonDeveloper=JSON.stringify(developer) // reasiganamos el JSON a una nueva constante y asi esa constante es igual a developer pero modo JSON
// Print developer as json object
console.log(jsonDeveloper)

//  tambien se puede hacer directo en un console log 
console.log(JSON.stringify(developer))