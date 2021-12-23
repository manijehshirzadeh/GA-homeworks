console.log("JavaScript is running...");
// Convert a string into a number?
let num = "4";
num = parseInt(num);
console.log(num);
let num2 = "5.6";
num2 = parseFloat(num2);
console.log(num2);

// Convert a number into a string?
let num3 = 15;
console.log(num3.toString());

// Make a string uppercased?
let string1 = "hello";
console.log(string1.toUpperCase());
console.log(string1.toLocaleLowerCase());
console.log(string1.charAt(0).toUpperCase().concat(string1.slice(1)));

// Get the second character out of a string?
let string2 = "hello";
console.log(string2.charAt(1));

// Use concatenation to combine two strings (e.g. join "Hello " and "World")?
let firstName = "Manijeh";
let lastName = "Shirzadeh";
let fullName = firstName.concat(" ", lastName);
console.log(fullName);

let userFirstName = prompt("Please enter your first name.");
let userLastName = prompt("Please enter your last name.");
console.log(userFirstName.concat(" ", userLastName));

// Get a number and square it (e.g. 4 squared is 16)?
let num4 = 16;
console.log(Math.pow(num4, 2));
console.log(Math.pow(num4, 3));

// Get the square root of a number (e.g. square root of 25 is 5)?
let num5 = 25;
console.log(Math.sqrt(num5));
