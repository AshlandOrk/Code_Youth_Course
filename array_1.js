let a = [
  "Apple",
  "Peach",
  "Pear",
  "Plum",
  "Sea buckthrone",
  "Pawpaw",
  "Haskips",
];
let arr = ["Hello", "What", "Are", "You"];

let marks = [25, 28, 35, 42, 45, 55, 59, 65];
let x = 45;

index = 5;
switch (index) {
  case 1:
    console.log(a[0], a[2], a[a.length - 1]);
    break;
  case 2:
    for (i = 0; i < marks.length; i++) {
      marks[i] = marks[i] + 5;
      console.log("Mark " + i + " is " + marks[i] + ".");
    }
    break;
  case 3:
    console.log(
      "The position of " +
        x +
        " in the array is " +
        linearSearch(marks) +
        " out of " +
        marks.length +
        "."
    );
    break;
  case 4:
    console.log(
      "The average of all the marks is " +
        average(marks) +
        " and the total is " +
        total(marks) +
        "."
    );
    break;
  case 5:
    console.log(
      "The lengths of the strings in the array 'arr' are: " +
        getLengths(arr) +
        "."
    );
    break;
}

function linearSearch(b) {
  for (i = 0; i < b.length; i++) {
    if (marks[i] == x) {
      return i;
    }
  }
}

function average(num1) {
  let average = 0;
  for (let i = 0; i < num1.length; i++) {
    average = average + num1[i];
  }
  average = average / num1.length;
  return average;
}

function total(num2) {
  let total = 0;
  for (i = 0; i < num2.length; i++) {
    total = total + num2[i];
  }
  return total;
}

function getLengths(arr) {
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i].length);
  }
}
