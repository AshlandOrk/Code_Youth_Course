// Exercise Questions
// Question 1: Create the array - [1, 2, 3], then console log "This is an array item" for each item in the array using forEach()
//
//Question 2: Create the array - [a, b, c] then using forEach, console log each item in teh array and next to it the phrase: "This is a letter of the alphabet".
//
//Question 3: Create the array - [10, 13, 25, 8, 30, 45], then in an a new array, get all the numbers that are under 20 from the 1st array.
//
//Question 4: Create the array - [5, 12, 17, 2, 19,], then create a new array  that has all the number from the 1st array that are larger than 10
//
//Question 6: Create the following array - ['cat', 'mouse', 'hamster'] then create a new array that has items from the 1st array that have less then 6 characters.
//
//Question 7: Create the array - [2, 4, 6, 8] then in a new array, get each number from the 1st array divided by 2
//
// Bonus Question
// let cost = [19.99, 5.99, 13.50, 9.99, 0.99, 47.99, 315.11]
// -Using map calculate the tax on all the items in cost | (price * 13) / 100 |
// -Using forEach add the tax to each item in cost
// -Using the cost array find the items that are more than $20 using filter
// -if there are 4 or more items that cost more than $20 console.log("Apply Deal") otherwise console.log("No Deal")
//

// Arrays
let arrFor = [1, 2, 3];
let arrFor2 = ["a", "b", "c"];

// Variables
const switchIndex = 8;

// Code Body
switch (switchIndex) {
  case 0:
    arrFor.forEach(function (thing) {
      console.log(thing, " this is an array item");
    });
    break;
  case 1:
    arrFor2.forEach(function (thing) {
      console.log(thing, "this is a letter of the alphabet.");
    });
    break;
  case 2:
    let newArr2 = [3, 15, 5, 11, 14];
    let newarr3 = newArr2.filter(function (item) {
      return item < 10;
    });
    console.log(newarr3);
    break;
  case 3:
    let arr3 = [10, 13, 25, 8, 30, 45];
    let arr4 = arr3.filter(function (item) {
      return item < 20;
    });
    console.log(arr4);
    break;
  case 4:
    let arr5 = [5, 12, 17, 2, 19];
    let arr6 = arr5.filter(function (item) {
      return item < 10;
    });
    console.log(arr6);
    break;
  case 5:
    let pets = ["cat", "mouse", "hampster"];
    let shortPets = pets.filter(function (pet) {
      return pet.length < 6;
    });
    console.log(shortPets);
    break;
  case 6:
    let arr1 = [1, 2, 3];
    let arr2 = arr1.map(function (item) {
      return item + 1;
    });
    console.log(arr1);
    console.log(arr2);
    break;
  case 7:
    let arr8 = [2, 4, 6, 8];
    let arr9 = arr8.map(function (item) {
      return item / 2;
    });
    console.log(arr9);
    break;
  case 8:
    let arrMap1 = [3, 6, 9, 12];
    let arrMap2 = arrMap1.map(function (item) {
      return item * 2;
    });
    console.log(arrMap2);
    break;
}
