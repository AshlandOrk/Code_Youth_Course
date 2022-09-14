// index 1: Create a function that displays the power of a number and exponent
// index 2: Create a function named add that takes two parameters. Add the two parameters and console log them to the screen
// index 3: Create a function named subtract that takes two parameters. Subtract the two parameters and console log them to the screen
// index 4: Create a function named multiply that takes two parameters. Multiply the two parameters and console log them to the screen
// index 5: Create a function named divide that takes two parameters. Divide the two parameters and console log them to the screen
// Question 5:
//         Write a function that has three parameters(a, b, operator)
//         Call the appropriate function depending on the operator. ex: call add() if the operator is "+"

// const numA = prompt("Enter first number: ");
// const operator = prompt("Enter operator: ");
// const numB = prompt("Enter a second number: ");
// let result;

// switcher(numA, operator, numB);

// console.log("The result is " + result + ".");

function switcher(num1, index, num2) {
  let sum = 0;
  let parsedNum1 = parseInt(num1);

  switch (index) {
    case "**":
      return (sum = num1 ** num2);
    //   return (sum = power(num1, num2));
    case "+":
      return (sum = num1 + num2);
    //  return (sum = add(num1, num2));
    case "-":
      return (sum = num1 - num2);
    //  return (sum = sub(num1, num2));
    case "*":
      return (sum = num1 * num2);
    // return (sum = multiply(num1, num2));
    case "/":
      if (num1 <= 0 || num2 <= 0) {
        console.log("Cannot divide by zero!");
        break;
      } else {
        return (sum = num1 / num2);
      }
    //return (sum = division(num1, num2));
    case "%":
      return (sum = num1 % num2);
    // return (sum = remainder(num1, num2));
  }
}
// function power(a, b) {
//   let sum = a ** b;
//   //console.log(a + " to the power of " + b + " is " + fullPow);
// }
// function add(a, b) {
//   let sum = a + b;
//   return sum;
// }
// function sub(a, b) {
//   let sum = a - b;
//   return sum;
// }
// function multiply(a, b) {
//   let sum = a * b;
//   return sum;
// }
// function division(a, b) {
//   let sum = a / b;
//   return sum;
// }
// function remainder(a, b) {
//   let sum = a % b;
//   return sum;
// }
