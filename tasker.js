const print=console.log;
const readline = require("readline");
const chalk=require("chalk");
const figlet=require("figlet");
print(chalk.white(figlet.textSync("Tasker")));

print(chalk.cyan("Type help to see the list of commands"));
const reader=readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt:">>"
});
reader.prompt();
const arr=[];
reader.on("line",function(data){
    const dataArray=data.split(" ");
    const cmd=dataArray[0];
    console.log(dataArray.shift());
    var task=dataArray.join(" ");
    console.log(task);
  if(cmd=="help"){     
print(chalk.white("Available commands:"));
print(chalk.white("1. add task_name"));
print(chalk.white("2. ls(to list all tasks"));
print(chalk.white("3. delete id enter task id to delete it"));
  }
 else if(cmd=="add"&& task.length>0){
arr.push(task);
print(chalk.blue(task +"added"));

  }
 else if(cmd=="ls"){
      for(var i=0;i<arr.length;i++){
       print(`${i+1} ${arr[i]}`);  
      }
  }
  else if(cmd=="delete"&&task.length>0){
const id=task.split(" ")[0];
arr.splice(id-1,1);
print(chalk.red("one task deleted"))
  }
  else{
    print(chalk.yellow("Wrong command"))  
  }
  reader.prompt();
})