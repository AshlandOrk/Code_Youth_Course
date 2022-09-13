// Index numbers for exercise:
// 1.  Write a for loop that starts at 2 and goes up to 10 by 2 (console log each number)
//
// 2. Write a loop that starts at 12 and decreases by 2 until it reaches zero
//
// 3. Create a variable called myNumber, set it to a number between 0 and 10
// Create a for loop that runs from 0 to 10, if i equals your number, console.log("My number is " + i)
//
// 4. Create a for loop that runs 3 times,
// Before the loop starts, console.log("Loop Start")
// if the loop is on it's first iteration, console.log("First Iteration")
// if the loop is on it's second iteration, console.log("Second Iteration")
// if the loop is on it's third iteration, console.log("Third Iteration")
// when the for loop ends, console.log("Loop End")
//
// 5.Create a variable called year, set it to 1970
// Using a for loop check if each year from 1970 to 2022 is a leap year
//  if it is console.log(year + " is a leap year")
//
// 6. Create a for loop that tells you if a value is even or odd
//
const index = 7;
console.log("code initialized");
switch (index) {
  case 1:
    console.log("index = 1");
    for (let i = 2; i <= 10; i += 2) {
      console.log(i);
    }
    break;
  case 2:
    console.log("index = 2");
    for (let i = 12; i >= 0; i -= 2) {
      console.log(i);
    }
    break;
  case 3:
    let myNumber = 5;
    for (let i = 0; i <= myNumber; i++) {
      console.log(i);
    }
    break;
  case 4:
    console.log("Loop Start");
    for (let i = 1; i <= 3; i++) {
      if (i == 1) {
        console.log("First Iteration");
      } else if (i == 2) {
        console.log("Second Iteration");
      } else if (i == 3) {
        console.log("Third Iteration");
      } else {
        console.log("Error - Loop Out of Range");
        break;
      }
      console.log("Loop End");
    }
    break;
  case 5:
    for (let year = 1970; year <= 2022; year++) {
      if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
        console.log(year + "is a leap year");
      } else {
        console.log(year + "is not a leap year");
      }
    }
    break;
  case 6:
    for (let i = 0; i <= 20; i++) {
      if (i % 2 == 0) {
        console.log(i + " is even");
      } else {
        console.log(i + " is odd");
      }
    }
    break;
  case 7:
    for (let i = 0; i <= 20; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        console.log("Fizzbuzz");
      } else if (i % 3 == 0) {
        console.log("Fizz");
      } else if (i % 5 == 0) {
        console.log("Buzz");
      }
    }
    break;
}
console.log("end of code");
