// Create three variables like this:
//         let button1 = true
//         let button2 = false
//         let button3 = true

//         Write two functions, one called Fail, and one called Pass.
//         inside each function console.log a message like "Test Passed" or "Test Failed"
//         then if button1 is true and either button2 or button3 is true call the pass function
//         Otherwise call the fail function

const button1 = true;
const button2 = false;
const button3 = true;

function pass() {
  console.log("You Passed!");
}

function fail() {
  console.log("You Failed!");
}

if (button2 == true) {
  fail();
} else if (button1 == true || button3 == true) {
  pass();
}
