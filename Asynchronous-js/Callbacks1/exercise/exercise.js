function printAsyncName(callback,string) {
   setInterval(() => {
        return callback()
    }, 1000);
   setInterval(() => {
        return console.log(string)
    }, 2000);

}
function hellow(){
    console.log("heloW")
}
printAsyncName(hellow,"JUAN")
