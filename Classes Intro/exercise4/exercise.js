// Define a class called `Person` that takes in three parameters in the constructor (`firstName`, `lastName` and `age`).
//  Create the getters and setters methods for each property and a getter method called `fullName` that returns the full name.

class Person {
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }

  // Getters
  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get age() {
    return this._age;
  }

  // Setters
  set firstName(newFirstName) {
    this._firstName = newFirstName;
  }

  set lastName(newLastName) {
    this._lastName = newLastName;
  }

  set age(newAge) {
    this._age = newAge;
  }

  // Getter para el nombre completo
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

// Modificar propiedades utilizando los setters
person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);

console.log(person);
// Modificar edad utilizando el setter
person.age = 40;

console.log(person);
// utilizamos los getters para ver datos
console.log(`First Name: ${person.firstName}`);
console.log(`Last Name: ${person.lastName}`);
console.log(`Age: ${person.age}`);