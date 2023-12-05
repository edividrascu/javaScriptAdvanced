function repeatHello(callback) {
    setInterval(() => {
        console.log(callback)
    }, 1000);

}

repeatHello (() => {       // las arrow function capturan mejor el callback desde el ambito que se de defiene      
    console.log("hello")
});

