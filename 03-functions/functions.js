console.log("JavaScript is running...");

// Driving Age
function canDrive(userAge) {
  if (userAge < 16) {
    console.log(
      `Sorry, you have ${16 - userAge} years to wait until you can drive`
    );
  } else {
    console.log("Drive away!");
  }
}
canDrive(16);

// The World Translator
console.clear();
function translator(language) {
  if (language === "eng") {
    console.log("Hello World");
  } else if (language === "fr") {
    console.log("Bonjour le monde");
  } else if (language === "no") {
    console.log("Hallo");
  } else if (language === "tr") {
    console.log("Merhaba");
  } else {
    console.log("Unknown language");
  }
}
translator("eng");

// The Age Calculator
console.clear();
function calculateAge(birthYear, currentYear) {
  console.log(
    `You are either ${currentYear - birthYear} or ${
      currentYear - birthYear - 1
    }`
  );
}
calculateAge(1984, 2021);
calculateAge(1982, 2021);
calculateAge(2014, 2021);

// Bonus
console.clear();
let today = new Date();
calculateAge(1984, today.getFullYear());

// The Lifetime Supply Calculator
function calculateSupply(age, amountPerDay) {
  const maxAge = 90;
  console.log(
    `You will need ${
      Math.floor((maxAge - age) * 365 * amountPerDay) + 1
    } to last you until the ripe old age of ${maxAge}`
  );
}
calculateSupply(36, 2.13);

// The Geometrizer
// console.clear();
function calcCircumference(radius) {
  console.log(`The circumference is ${2 * 3.14 * radius}`);
}
calcCircumference(1);
function calcArea(radius) {
  console.log(`The area is ${3.14 * radius ** 2}`);
}
calcArea(2);

// The Temperature Converter
// console.clear();
function celsiusToFahrenheit(celsiusTemperature) {
  console.log(
    `${celsiusTemperature}°C is ${(celsiusTemperature * 9) / 5 + 32}°F`
  );
}
let celsius = 50;
celsiusToFahrenheit(celsius);

function fahrenheitToCelsius(fahrenheitTemperature) {
  console.log(
    `${fahrenheitTemperature}°F is ${(5 / 9) * (fahrenheitTemperature - 32)}°C`
  );
}
let fahrenheit = 122;
fahrenheitToCelsius(fahrenheit);

// Working with Users
console.clear();
const users = [
  {
    email: "groucho@ga.co",
    password: "chicken",
    isAdmin: true,
  },
  {
    email: "harpo@ga.co",
    password: "elephant",
    isAdmin: false,
  },
  {
    email: "gummo@ga.co",
    password: "pinkFairyArmadillo",
    isAdmin: true,
  },
  {
    email: "zeppo@ga.co",
    password: "dumboOctopus",
    isAdmin: false,
  },
];
function userLoggedIn(id, email, password) {
  if (users[id].password === password && users[id].email === email) {
    console.log("You are logged in");
  } else {
    console.log("Sorry, something went wrong");
  }
}
userLoggedIn(0, "groucho@ga.co", "chicken");

// Bonus: Working with Users, Don't receive an ID!
function userLoggedInWithoutId(email, password) {
  console.log(email, password);
  for (let i = 0; i <= users.length - 1; i++) {
    if (users[i].email === email) {
      if (users[i].password === password) {
        console.log("You are logged in");
      } else {
        console.log("Sorry, something went wrong");
      }
    }
  }
}
userLoggedInWithoutId("harpo@ga.co", "elephant");

// Make a function that creates an account
function createAccount(email, password, isAdmin) {
  const newAccount = {
    email: email,
    password: password,
    isAdmin: isAdmin,
  };
  users.push(newAccount);
}
createAccount("chico@gmail.com", "redLippedBatfish", false);

// Make a function that deletes an account
console.clear();
function deleteAccount(email, password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      console.log("found it");
      users.splice(i, 1);
    }
  }
}
deleteAccount("chico@gmail.com", "redLippedBatfish");
console.log(users);

// Make a function that updates an account
console.clear();
function updateAccount(email, key, newValue) {
  for (let i = 0; i < users.length; i++) {
    if (email === users[i].email) {
      users[i][key] = newValue;
    }
  }
}
updateAccount("gummo@ga.co", "password", "123");
console.log(users);

console.clear();
function newUpdateAccount(email, newValues) {
  console.log(newValues);
  for (let i = 0; i < users.length; i++) {
    if (email === users[i].email) {
      users[i].password = newValues.password;
      users[i].isAdmin = newValues.isAdmin;
    }
  }
}
newUpdateAccount("harpo@ga.co", { password: "gharial", isAdmin: true });
console.log(users);

// A Transit Application
console.clear();
const stations = [
  "Museum",
  "St. James",
  "Circular Quay",
  "Wynyard",
  "Townhall",
  "Central",
  "Redfern",
  "Macdonaldtown",
  "Newtown",
];
function travelFrom(startStation, endStation) {
  startStation = startStation.toLowerCase();
  startStation = startStation[0].toUpperCase() + startStation.slice(1);

  endStation = endStation.toLowerCase();
  endStation = endStation[0].toUpperCase() + endStation.slice(1);

  let startIndex = stations.indexOf(startStation);
  if (startIndex === -1) {
    console.log("This start station doesn't exist!");
  }

  let endIndex = stations.indexOf(endStation);
  if (endIndex === -1) {
    console.log("This end station doesn't exist!");
  }

  if (startIndex !== -1 && endIndex !== -1) {
    if (endIndex > startIndex) {
      console.log(
        `To go from ${startStation} to ${endStation} - you'll need to go through ${
          endIndex - startIndex - 1
        } stops`
      );
      console.log(stations.slice(startIndex, endIndex + 1).join(", -"));
    } else {
      console.log(
        `To go from ${startStation} to ${endStation} - you'll need to go through ${
          startIndex - endIndex - 1
        } stops`
      );

      console.log(
        stations
          .slice(endIndex, startIndex + 1)
          .reverse()
          .join(", -")
      );
    }
  }
}
travelFrom("CenTral", "WYnyarD");
