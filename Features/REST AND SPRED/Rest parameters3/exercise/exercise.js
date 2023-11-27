const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const {id, ...personInfo} =person
console.log(id, personInfo);



// const id = person.id;
// const personInfo =  {...person} // al principio pensaba que iba ser asi hasta que me di cuenta que salia el id 2 veces en la consola y ayyy que dolor de cabeza me dio eso
// console.log(id, personInfo);