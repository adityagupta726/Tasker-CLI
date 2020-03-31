//require => readline
const readline = require("readline");
//interface
const reader=readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt:"$$"
});
console.clear();
//prompt
reader.prompt();

reader.on("line",function(data){
    console.log("Did you just said "+data);
    reader.prompt();
})
//cli => close
reader.on("close",function(){
    console.log("Thanku for using our cli");
})