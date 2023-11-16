// En este ejercicio hemos creado dos objetos: person1e person2. El objeto person2ha sido asignado al objeto person1.
//  Debes modificar la propiedad firstNamedel objeto person2en "Simon".

// Escribe un comentario explicando por qué, al modificar el objeto , también se modificaría person2el objeto .person1

const person1 = {
  firstName: "John", 
  lastName: "Doe",
  age: 25,
};
person2 = {...person1}
// const person2 = person1; // eso pasa por que el obejto esta guardado en la memoria una sola vez entonces cualquier cambio en la copia de ese mismo objeto sobreescrible el original
  //con esto copiamos el objeto principal sin en un nuevo espacio de la memoria del pc 

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName='Simon'
console.log(person1);
console.log(person2);