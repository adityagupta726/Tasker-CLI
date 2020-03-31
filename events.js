const events = require("events");
const eventEmitter = new events();
//server
eventEmitter.on("login",function(email,password){
    if(email=="abc@gmail.com" && password==12345678){
        console.log("user verified");
    }
    else{
        console.log("User not verified");
    }
});
eventEmitter.on("login",function(email,password){
    if(email=="abc@admin.com" &&password==1234){
        console.log("Welcome Admin");
    }
    else{
        console.log("you are not admin");
    }
});

//client

eventEmitter.emit("login","abc@gmail.com",12345678);
console.log("**************************");
eventEmitter.emit("login","abc@admin.com",1234);