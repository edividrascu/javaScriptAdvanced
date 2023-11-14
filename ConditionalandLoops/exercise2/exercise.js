// Create the function `nicknameMap` using the for loop, which takes in an array of people and returns a
//  `nicknames` array. The nickname must be composed as follows: `<name>-<age>`.

function nicknameMap(persons) {
  const nicknames = []; // hacemos un array vacio para luego meterle datos con .push

  // Recorremos el array de personas con un bucle for
  for (let i = 0; i < persons.length; i++) { 
    const person = persons[i];     //la funcion de for si la i es mas pequeña que el array sigue ejecutandose
    
    // Construimos el apodo usando el formato <name>-<age>
    const nickname = (`${person.name}-${person.age}`);

    // Agregamos el apodo al array de nicknames
    nicknames.push(nickname);
  }

  // Devolvemos el array de nicknames
  return nicknames;
}


const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const nicknames = nicknameMap(persons);
console.log(persons);
console.log(nicknames);


