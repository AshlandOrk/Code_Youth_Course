//make an object person with entries first name,last name,phone no,email..
//for loop..you have to display all prperties and their count

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

let switchIndex = 4;

switch (switchIndex) {
  case 0:
    let count = 0;

    let people = {
      firstName: "Cyrus",
      lastName: "Dean",
      phoneNum: 4678451242,
      email: "placeholder#gmail.com",
    };

    for (let key in people) {
      count = count + 1;
      console.log(key, "-", people[key]);
    }
    console.log("there are " + count + " properties within the object.");
    break;
  case 1:
    const a = [1, 3, 67, 89];
    for (let i = 0; i < a.length; i++) {
      console.log(a[i]);
    }

    const students = [
      {
        id: 1,
        name: "Bob",
        location: "Toronto",
      },
      {
        id: 2,
        name: "Alice",
        location: "Ottawa",
      },
      {
        id: 3,
        name: "Carol",
        location: "Montreal",
      },
    ];

    for (let j = 0; j < students.length; j++) {
      console.log(students[j].name);
    }

    break;
  case 2:
    const library = [
      {
        title: "Radical Mycology",
        author: "Peter McCoy",
        readingStatus: true,
      },
      {
        title: "Surface Detail",
        author: "Ian M Banks",
        readingStatus: true,
      },
      {
        title: "A Psalm for the Wild-Built",
        author: "Becky Chambers",
        readingStatus: false,
      },
      {
        title: "Prefigurative Politics: Building Tomorrow Today",
        author: "Paul Raekstad, Sofa Saio Gradin",
        readingStatus: false,
      },
      {
        title: "Humankind: Solidarity with Nonhuman People",
        author: "Timothy Morton",
        readingStatus: false,
      },
    ];

    for (let book of library) {
      console.log(book.title, " by ", book.author);
      if (book.readingStatus == false) {
        console.log("You still have to read ", book.title);
      }
    }

    break;
  case 3:
    let list = [
      {
        firstName: "Kiran",
        lastName: "Kumar",
        salary: 25000,
      },
      {
        firstName: "Mohan",
        lastName: "Srivastav",
        salary: 20000,
      },
      {
        firstName: "Mary",
        lastName: "Kom",
        salary: 23000,
      },
    ];

    //-console.log() the full name and salary of anyone who's salary that is over 22500

    for (let worker of list) {
      if (worker.salary > 22500) {
        console.log(
          worker.firstName,
          " ",
          worker.lastName,
          "have a salary of over 22500."
        );
      }
    }

    break;
  case 4:
    let myNums = [
      { x: 9, y: 5 },
      { x: 6, y: 3 },
      { x: 7, y: 7 },
      { x: 5, y: 5 },
      { x: 0, y: 3 },
      { x: 7, y: 3 },
      { x: 4, y: 9 },
      { x: 8, y: 8 },
      { x: 5, y: 3 },
      { x: 1, y: 7 },
      { x: 7, y: 5 },
      { x: 7, y: 7 },
      { x: 6, y: 0 },
      { x: 8, y: 3 },
      { x: 1, y: 3 },
      { x: 3, y: 2 },
      { x: 9, y: 3 },
      { x: 7, y: 6 },
      { x: 7, y: 1 },
      { x: 1, y: 7 },
    ];

    //  -Count the total number of objects in myNums where x and y are the same
    let totalCount = 0;

    for (let set of myNums) {
      if (set.x == set.y) {
        totalCount++;
      }
    }
    console.log("The total number of sets that are identical are", totalCount);
    break;
}
