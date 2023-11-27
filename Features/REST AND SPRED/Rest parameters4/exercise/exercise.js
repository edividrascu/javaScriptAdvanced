// Realice una refactorización de código utilizando el operador Rest. La salida de console.log debe ser la misma.

// tambien hice esto antes de la reunion pero veo que no hacia falta modificar la funccion
function sum(...numbers) {
  let sumTotal=numbers.reduce((a, n) => a + n,0);
  return sumTotal

}

const numbers = [1, 2, 3];
console.log(sum(...numbers));//6

const numbers2 = [...numbers,4,5,6];
console.log(sum(...numbers2));//21



// const obj = {
//   num1:7,
//   num2:8,
//   num3:9
// }

// console.log(sum(...obj));// ERROR 404, supongo que habria que hacer otra funccion aparte para sumar objetos ya que hay que entrar en porpiedades y tal 









// https://www.youtube.com/watch?v=a_hye_eCULo  apuntes