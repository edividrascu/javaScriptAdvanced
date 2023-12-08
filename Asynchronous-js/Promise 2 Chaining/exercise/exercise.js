const isLogged = true;

function miPromise(isLogged) {
    return new Promise((risolve,reject)=>{
        if(isLogged==true){
            setTimeout(() => {
                risolve(Math.random())
            }, 2000); 
        }else{
            reject("error;")
        }
    })
}

function promsie2(number) {
    return new Promise ((resolve,reject)=>{
        if (number>=0.5) {
            resolve({name: "John", age: 24})
        }else{
            reject("error;")
        }
    })
}

miPromise(isLogged)
.then((randomNumber)=>{
    console.log(randomNumber)
   return promsie2(randomNumber)
   
})
.then((user)=>{
    console.log(user)
})
.catch((err)=>{
    console.log(err)
})
