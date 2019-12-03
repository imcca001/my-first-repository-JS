
function evenOrOdd(num) {
  if (!Number.isInteger(num)){
    console.log('Incorrect, integer needed!');
    return;
  }
  
  if (num % 2 === 0) {
    console.log('even');
  }
  else {
    console.log('odd')
  }

}

num = 2;
second = 3;
third = "Hola!";
evenOrOdd(num);
evenOrOdd(second);
evenOrOdd(third);




