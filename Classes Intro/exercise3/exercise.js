// Define a static method called fromObject inside the Person class which takes in an object literal as parameter and instantiate a Person object.



class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  static fromObject(obj){
    return new Person(obj.firstName, obj.lastName);
  }
  // mas pruebas de static
  static fullname(){
    if (obj && obj.firstName && obj.lastName){     // si  obj && obj.firstName && obj.lastName son true o sea que no sean ni null ni undefined pues...
      console.log("El nombre completo es: "+obj.firstName+" "+obj.lastName)
    }else{
      console.log("nombre completo no esta disponible")
    }
  }

}
const personRandom = {
  firstName: "Greg",
  lastName: "sanchez",
}
const obj = {
  firstName: "Mario",
  lastName: "Rossi",
};

const person = Person.fromObject(obj);
console.log(person.firstName + " " + person.lastName);
// en la clase de person acedemos al metodo static de fullname y como parametro le pasamo el obj
Person.fullname(obj);
// si hacemos esto no servira de nada ya que el fullname esta static y sus parametros del if son obj.fullname 
Person.fullname(personRandom);

