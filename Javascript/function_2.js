//
// 1. Enter a number (prompt) 8
// 2. If number<=10 ,find sum of numbers from 0 to that number <=10
// 3. If number>= 10 and number <=20, find double of that number >10 &&<=20
// 4. if number>=20, reduce that number to half. >20
//
let promptInput = window.prompt("Enter a number: ");

function sumFind(a) {
  let sum = 0;
  for (i = 0; i <= a; i++) {
    sum = sum + i;
    if (i == a) {
      return sum;
    }
  }
}

let double = (b) => {
  let result = b * 2;
  return result;
};

let reduce = (c) => {
  let result = c * 0.5;
  return result;
};

if (promptInput <= 10) {
  //  let result = sumFind(promptInput);
  console.log("Sum is " + sumFind(promptInput));
} else if (promptInput >= 10 && promptInput <= 20) {
  console.log("Double is " + double(promptInput));
} else if (promptInput >= 20) {
  console.log("Reduced number is" + reduce(promptInput));
} else {
  console.log("Error!");
}
