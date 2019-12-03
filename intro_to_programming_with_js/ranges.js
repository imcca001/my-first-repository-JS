function numRange(num) {
  if (num < 0){
    return `${num} is less then 0`;
  } else if (num <= 50){
      return `${num} is between 0 and 50`;
  } else if (num <= 100){
      return `${num} is between 51 and 100`;
  } else {
    return `${num} is greater then 100`;
  }
}

console.log(numRange(25));
console.log(numRange(75));
console.log(numRange(125));
console.log(numRange(-25));