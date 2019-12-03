function allCaps(str) {
  if (str.length >= 10){
    console.log(str.toUpperCase());
  } else {
    console.log(str);
  }
}

less_then_ten = "hello";
greater_then_ten = "How are you doing?";
allCaps(less_then_ten);
allCaps(greater_then_ten);