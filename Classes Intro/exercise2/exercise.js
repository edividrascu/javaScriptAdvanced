class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Developer extends Person {
  constructor(firstName, lastName, role) {
    super(firstName, lastName);
    this._role = role; //empeze con "_" por que lei que ponia algo de buenas tecnicas pero no estoy seguro si esta bien o no
  }
}

const developer = new Developer("Mario", "Rossi", "Front-end");
console.log(
  developer.firstName + " " + developer.lastName + " " + developer._role
); //Mario Rossi Front-end
