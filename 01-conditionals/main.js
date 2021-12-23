console.log("javaScript is running");

// What number's bigger?
let numOne = 32;
// let numOne = prompt("Please enter number one...");
let numTwo = 10;
// let numTwo = prompt("Please enter number two...");
if (numOne > numTwo) {
  console.log(`numOne ${numOne} is bigger than numTwo ${numTwo}`);
} else if (numTwo > numOne) {
  console.log(`numTwo ${numTwo} is bigger than numOne ${numOne}`);
} else {
  console.log(`numOne ${numOne} is equal to numTwo ${numTwo}`);
}

// Driving Age
let userName = "Manijeh";
// let userName = prompt("Pleas enter your name");
let userAge = 12;
// let userAge = prompt("Pleas enter your age");
if (userAge < 16) {
  console.log(
    `Sorry ${userName}, you still have ${
      16 - userAge
    } years before you can drive`
  );
} else {
  console.log("Drive into the sunset!");
}

// Say Hi!
let language = "French";
if (language === "English") {
  console.log("Hi");
} else if (language === "French") {
  console.log("Bonjour");
} else if (language === "Norwegian") {
  console.log("Hallo");
} else if (language === "Turkish") {
  console.log("Merhaba");
} else {
  console.log("Salam");
}

// Southern or Northern Hemisphere?
let latitude = 20;
if (latitude < 0) {
  console.log("Southern Hemisphere");
} else if (latitude > 0) {
  console.log("Northern Hemisphere");
} else {
  console.log("On the equator");
}

let longitue = -10;
if (longitue < 0) {
  console.log("Western Hemisphere");
} else if (longitue > 0) {
  console.log("Eastern Hemisphere");
} else {
  console.log("On the prime meridian");
}

// Year in the 19th, 20th or 21st Century?
let year = 1700;
if (year >= 1801 && year <= 1900) {
  console.log("19th Century");
} else if (year >= 1901 && year <= 2000) {
  console.log("20th Century");
} else if (year >= 2001 && year <= 2100) {
  console.log("21st Century");
} else {
  console.log("Sorry, it must be another century");
}

// Greet
let hour = 20;
if (hour < 10) {
  console.log("Good Morning");
} else if (hour < 19) {
  console.log("Good Day");
} else {
  console.log("Good Evening");
}
