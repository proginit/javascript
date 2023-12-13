// Factorial dado un numero entero

function firstFactorial(num) {
  return num === 1 ? 1 : num * firstFactorial(num - 1);
}

// firstFactorial(5);
// console.log(firstFactorial(5));
// firstFactorial(readLine());

function firstFactorial2(num) {
  var factorial = 1;
  for (var i = 1; i <= num; i++) {
    factorial *= i;
  }

  return factorial;
}

console.log(firstFactorial2(5));
