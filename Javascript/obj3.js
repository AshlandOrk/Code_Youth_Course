let d = new Date();

let switchIndex = 2;
switch (switchIndex) {
  case 0:
    let student = {
      name: "Nate",
      id: 491827,
      age: 25,
      phoneNumber: 9059272282,
      email: "placeholder@hotmail.com",
      marks: 56,
      lastActive: d,
      address: {
        country: "canada",
        area: "hamilton",
        streetNumber: 4871,
      },
    };
    for (let key in student) {
      let value = student[key];
      console.log("Student " + key + " " + value);
    }
    break;

  case 1:
    let books = {
      book1: {
        title: "Humankind",
        publisher: "Verso",
        Author: "Timothy Morton",
        published: 2017,
        genres: "Philosophy: Post Human Thought",
      },
      book2: {
        title: "Radical Mycology",
        publisher: "Chthaeus",
        Author: "Peter McCoy",
        published: 2016,
        genres: "Mycology",
      },
    };
    break;
  case 2:
    let videoGames = {
      action: "Bloodborne",
      fighting: "Tekken 7",
      racing: undefined,
      rhythm: "Osu!",
    };
    for (let key in videoGames) {
      if (videoGames[key] != undefined) {
        console.log(videoGames.key);
      }

      //console.log()
    }

    break;
  case 3:
    break;
}
