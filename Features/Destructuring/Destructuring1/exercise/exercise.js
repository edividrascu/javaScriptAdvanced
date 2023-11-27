// Utilice la desestructuración, en lugar de una variable temporal, para intercambiar los valores de las variables.
//  seria mas facil si pondria Utiliza la destructuración para intercambiar los valores de dos variables sin usar la variable temp;
let num1 = 10;
let num2 = 20;
console.log('Before swap: ', num1, num2); // Before swap: 10 20

// Variable swapping
// let temp = num2;
// num2 = num1;
// num1 = temp;

// Utilizando destructuración para intercambiar los valores directamente
[num1, num2] = [num2, num1];

console.log('After swap: ', num1, num2); // After swap: 20 10