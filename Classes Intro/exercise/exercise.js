
// Define a class called `Person` that takes in two arguments (`firstName` and `lastName`) in the constructor.

// const developer = new Person('Mario', 'Rossi');
// console.log(developer.firstName + " " + developer.lastName);
// Class definition

class Person { 
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    // podiamos hacer esta funcion/metodo y para la proxima person noharia falta tanto codigo
    sayFullName() {
      console.log(`Hola mi nombre completo es ${this.firstName} ${this.lastName}`);
    }
  }
  
  const developer = new Person('Mario', 'Rossi');
  console.log(developer.firstName + " " + developer.lastName);
//   llamando el metodo  sayFullName
  developer.sayFullName()
  