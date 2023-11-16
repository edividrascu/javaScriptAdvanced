function multiplyByTwo(value) {
  let number = 2;
  
  function inner() {
    let resut =
    number * value;
    return resut;
  }
  return inner;
}
console.log(multiplyByTwo(4)()) //4x2 = 8

