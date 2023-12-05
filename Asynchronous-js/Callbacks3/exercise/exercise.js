function repeatHello(callback) {
    let clear=setInterval(() => {
        console.log(callback())
    }, 1000);
    setTimeout(() => clearInterval(clear), 11*1000); // 11 segundos
}

repeatHello(() => {
    return "hello";
});

let micontador = 0;

function contador(callback) {
    let interval = setInterval(() => {
        micontador++;
        console.log(micontador);

        if (micontador === 10) {
            clearInterval(interval);
            callback(); // Llama al callback cuando el contador llega a 10
        }
    }, 1000);
}

contador(() => {
    console.log(`Contador ha llegado a 10 `);
});
