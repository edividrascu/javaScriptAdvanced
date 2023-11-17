// Create an object `person`. Print its key/value pair in the console. Try to use the method `Object.kyes`:

// Print values of person using Object.keys
const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}
let keys=Object.keys(person); // obtener todas las keys que hay en el object
let value=Object.values(person);//                  ""

for (let i = 0; i < keys.length; i++) { // recorre el arary de keys
  console.log(keys[i]+"-"+value[i]);     // muestra uno por uno
}








