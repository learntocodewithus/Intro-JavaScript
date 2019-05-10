function add(a,b){
  return a + b
}

function mult(a,b){
  return a*b
}

function calculator(orange,banana){
  var addition = add(orange, banana);
  var multiplication = mult(orange, banana);
  console.log(addition);
  console.log(multiplication);
}


calculator(5,7)