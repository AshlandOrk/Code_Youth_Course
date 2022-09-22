// Write a function to find the average of n natural numbers average()
// write a function to sort two inputs in ascendning order ascending()

const index = 2;
const input1 = 35;
const input2 = 12;

switch (index) {
  case 1:
    console.log(
      "The average of the natural numbers up to " +
        input1 +
        " is " +
        average(input1) +
        "."
    );
    break;
  case 2:
    ascending(input1, input2);
    break;
}

function average(num1) {
  let average = 0;
  for (let i = 0; i <= num1; i++) {
    average = average + i;
  }
  average = average / num1;
  return average;
}

function ascending(num2, num3) {
  if (num2 > num3) {
    console.log("In ascending order: " + num3 + ", " + num2);
  } else if (num2 < num3) {
    console.log("In ascending order: " + num2 + ", " + num3);
  } else {
    console.log("The numbers are the same!");
  }
}
