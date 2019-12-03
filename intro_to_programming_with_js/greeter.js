// greeter.js
let rlSync = require("readline-sync")

let greeter = function(){
  let firstName = rlSync.question("What is your first name? ");
  let secondName = rlSync.question("What is your second name? ");
  let name = firstName + " " + secondName;
  return name
}

name = greeter();
console.log(`Hello, ${name}!`);