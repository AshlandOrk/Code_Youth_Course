// Question 1: Create an array with 5 items: a,b,c,d,e,f; then console log the array
//
// Question 2: Console log the first first and last item in the array from question 1
//
// Question 3: Create this array - [1,2,3] then add'4' to the end using push()
//
// Question 4: Create this array - [a,b,c] then add 'd' to the end using push()
//
// Question 5: Declare an empty array. Using a for loop, add the number 0 - 10 to the array
//
// Question 6: Create this array - [4,5,6,7] then remove '7' from it using pop()
//
// Question 7: Create this array - [f,g,h,i] then remove 'i' from it using pop()
//
// Question 8: Create this array - [cats, dogs, birds] then add 'hamster' at the start using shift()
//
// Question 9: Create this array - [cake, cookies, ice cream,] then add 'salad' from the start using unshift()
//
// Question 10: let weekDays = ["Friday", "Tuesday","Wednesday","Thursday","Sunday","Monday","Saturday","PlaceHolder"]
// Using only pop, push, unshift, and shift make weekDays start at monday and end at sunday in the correct order
//
//Question 11: Create the array - [1, 2, 3, 4, 5] then remove the first 3 items using splice()
//
//Question 12:  Splice the unhealthy food out of the fridge(By your own judgement)
//
//Question 13: Create 2 arrays - [1, 2, 3] & [4, 5, 6] then combine them together using concat()
//
//Question 14: Create 2 arrays - [a, b, c] & [d, e, f] then combine them together using concat()
//
//Question 15: Create the array - [a, b, c, d, e, f, g] then create another array and fill it with the last 3 items from the 1st array
//
//Question 16: Create the arr - [1,2,3,4,5], then check if it has the number 4 in it using include()
//
//Question 17 (bonus): Check if nums contains the number 7. if it does console.log("SEVEN ALERT!!!!")
//

// Arrays
let arr = ["a", "b", "c", "d", "e"];
let arr1 = [1, 2, 3];
let arr2 = ["a", "b", "c"];
let arr3 = [];
let arr4 = [4, 5, 6, 7];
let arr5 = ["f", "g", "h", "i"];
let pets = ["cats", "dogs", "birds"];
let desserts = ["cake", "cookies", "ice cream"];
let weekDays = [
  "Friday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Sunday",
  "Monday",
  "Saturday",
  "PlaceHolder",
];
let arrSplice = [1, 2, 3, 4, 5];
let refridge = [
  "Old bread",
  "Banana",
  "pizza",
  "cucumber",
  "icecream",
  "Pasta",
  "hotdog",
];
let arr6 = ["d", "e", "f"];
let arr7 = ["a", "b", "c", "d", "e", "f", "g"];

// Variables
let switchIndex = 14;

// Code Body
switch (switchIndex) {
  case 0:
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
    break;
  case 1:
    console.log(arr[0]);
    console.log(arr[arr.length - 1]);
    break;
  case 2:
    arr1.push(4);
    console.log(arr1);
    break;
  case 3:
    arr2.push("d");
    console.log(arr2);
    break;
  case 4:
    for (let i = 0; i <= 10; i++) {
      arr3.push(i);
    }
    console.log(arr3);
    break;
  case 5:
    arr4.pop();
    console.log(arr4);
    break;
  case 6:
    arr5.pop();
    console.log(arr5);
    break;
  case 7:
    pets.shift();
    console.log(pets);
    break;
  case 8:
    desserts.unshift("salad");
    console.log(desserts);
    break;
  case 9:
    weekDays.pop();
    weekDays.shift();
    weekDays.unshift("Monday");
    weekDays.pop();
    weekDays.pop();
    weekDays.pop();
    weekDays.push("Friday");
    weekDays.push("Saturday");
    weekDays.push("Sunday");
    console.log(weekDays);
    break;
  case 10:
    arrSplice.splice(0, 3);
    console.log(arrSplice);
    break;
  case 11:
    let newArr = arr1.concat(arr4);
    newArr.pop();
    console.log(newArr);
    break;
  case 12:
    let newArr2 = arr2.concat(arr6);
    console.log(newArr2);
    break;
  case 13:
    let arrSlice = arr7.slice(arr7.length - 3, arr7.length);
    console.log(arr7);
    console.log(arrSlice);
    break;
  case 14:
    console.log(arrSplice.includes(4));
    break;
  case 15:
    break;
}
