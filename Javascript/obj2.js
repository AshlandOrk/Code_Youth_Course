// 1)Create an object called user
// Create three keys called username, password, loggedIn
// Set there values as a string for username, a string for password, and a boolean for loggedIn
//
// 2)
//Create an object called employee
//Create four keys called name, employeeId, lastActive, salary
// Set the values as a string for name, an integer for employeeId, a date for lastActive, and a float for salary
//
//To set a date use ( new Date() )
//3)
//Fix the following Object
//
//let myObj = {
//name: "Bifli"
//grade: 42
//notes:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, aspernatur?"
//}
//
//4)
//True or False
//You can't put keys in quotes
//true
//
//Question 5: Create the following object myCats = {cat1 : "wiggles", cat2: "fluffy", cat3: "sir meowsalot"}. Now, console log the name of the 3rd cat.
//
// Question 6: Create the following object myGames = {action: "Uncharted", shooter: "MW2", horror: "Resident Evil"}. Now console log
// the name of the action game.
//
//Question 7: Create any object and then nest another object inside it
//
//Question 8: Create an object named 'workPlace' and then nest 3 objects inside with the names 'employee1', 'employee2' etc. and in each employee object, create the keys: name, id, hireDate (fill whatever value you want inside these)
//

const d = new Date();

let user = {
  username: "placeholder",
  password: "abc123",
  loggedIn: true,
};

let employee = {
  name: "Max",
  employeeId: 412523,
  lastActive: d,
  salary: 40000,
};

let myObj = {
  name: "Bifli",
  grade: 42,
  notes:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, aspernatur?",
};

let myCats = { cat1: "Wiggles", cat2: "fluffy", cat3: "sir meowsalot" };

console.log(myCats.cat3);

let myGames = { action: "Uncharted", shooter: "MW2", horror: "Resident Evil" };

console.log(myGames.action);

let objNest = {
  obj1: { name: "oscar", age: 43, job: "musician" },
  obj2: { name: "Sarah", age: 32, job: "Designer" },
};

console.log(objNest.obj1.name);
console.log(objNest.obj2.name);

let date1 = new Date(2021, 03, 04);
let d2 = new Date(2020, 12, 05);
let d3 = new Date(2022, 05, 12);

let workplace = {
  employee1: { name: "Devon", id: 002, hireDate: date1 },
  employee2: { name: "Milo", id: 004, hireDate: d2 },
  employee3: { name: "Alice", id: 007, hireDate: d3 },
};

console.log(workplace.employee1);
console.log(workplace.employee2);
console.log(workplace.employee3);
