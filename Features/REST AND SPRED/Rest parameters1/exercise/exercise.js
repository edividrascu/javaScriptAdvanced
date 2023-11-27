let numberStore = [0, 1, 2];
let newNumber = 3;

// numberStore.push(newNumber);
numberStore = [...numberStore,newNumber] // esto ya se queda permanente si no hay un nuevo cambio 

console.log(numberStore);
