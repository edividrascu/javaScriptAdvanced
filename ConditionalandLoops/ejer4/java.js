
// Create a function sumUntil that takes in a parameter and retunrs the sum of all numbers
//  ranging from one to the value passed as parameter.
function sumUntil(maxValue) {
    let incremento=0;
    for (let i = 0; i <= maxValue; i++) {
      incremento+=i
      console.log(incremento+"+") // esto es para ver todo el proceso 
    }
    return incremento
  }

console.log(sumUntil(5)); // OUTPUT: 15
console.log(sumUntil(20))

