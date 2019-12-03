/*
let rlSync = require("readline-sync");
let firstNumber = Number(rlSync.question("Whats the first number \n"));
let secondNumber = Number(rlSync.question("Whats the second number \n"));

function multiply(first, second){
  return first * second;
}
let multiple = multiply(firstNumber, secondNumber);
console.log(`${firstNumber} * ${secondNumber} = ${multiple}`);
*/

function multiply(left, right) {
  return left * right;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);
