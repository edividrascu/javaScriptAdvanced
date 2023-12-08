const number = 8;

let miPromise = new Promise ((resolve,reject)=>{
    if (number>=10){
        resolve("ES mayor que 10")
    }else {
        reject("es menor de 10")
    }
})

miPromise
.then((done)=>{
    console.log(done)
})
.catch((err)=>{
  console.log(err)
})
