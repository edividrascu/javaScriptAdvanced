// Starting from the previous exercise, are you able to print the value of `helloName`, after 1 second?

// Tips:

// - The method that you need to solve the exercise is: `setTimeout`
// - You can learn more about the topic checking this article: https://www.freecodecamp.org/news/closures-in-javascript/
 


// aver esta es la solucion que se me ha ocurrido ami pero claro veo que hay que meter el settimedentro para que tenga mas sentido el ejercicio 
// function printName() {
//     let helloName="Hello John"
//     function inner() {
//         return helloName
//     }
//     return inner
// }
// setTimeout(() => {
//     console.log(printName()())
// }, 1000);

function printName() {
    let helloName = "!Hello John!";
    function inner() {
        setTimeout(() => {
            console.log(helloName);
        }, 1000);
    }
    return inner;
}

// Llamas a la función interna después de obtenerla y como ya el consol log esta dentro del inner pues ya esta 
printName()();
        