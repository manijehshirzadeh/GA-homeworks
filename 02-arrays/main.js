// Working with Arrays
let rainbowColors = [];
console.log(rainbowColors);
rainbowColors.push("orange");
console.log(rainbowColors);
rainbowColors.unshift("red");
console.log(rainbowColors);
rainbowColors.push("yellow");
console.log(rainbowColors);
rainbowColors.push("green", "blue", "indigo", "violet");
console.log(rainbowColors);

console.log(rainbowColors.length);
console.log(rainbowColors[1]);
console.log(rainbowColors[rainbowColors.length - 1]);
console.log(rainbowColors.indexOf("blue"));

// Bonus: Find out the difference between .slice and .splice
let twoColors = rainbowColors.slice(1, 3);
console.log(twoColors);

const nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
nums.splice(3, 3);
console.log(nums);

// Bonus: Work with arrays of arrays
const arrOfArrs = [
  ["inner array first item", "inner array second item"],
  ["first", "second", "third"],
];
console.log(arrOfArrs[0][0]);
console.log(arrOfArrs[1][2]);
console.log(arrOfArrs[1][arrOfArrs[1].indexOf("third")]);

// Bonus
for (i = 0; i <= arrOfArrs[1].length - 1; i++) {
  console.log(arrOfArrs[1][i]);
}

// Your top choices
let myBook = ["Maths", "Psychology", "Literary", "History", "Novel"];
for (i = 0; i <= myBook.length - 1; i++) {
  console.log(`My #${i + 1} choice is ${myBook[i]}.`);
}

//Bonus
let suffix = ["st", "nd", "rd", "th", "th"];
for (i = 0; i <= myBook.length - 1; i++) {
  console.log(`My ${i + 1}${suffix[i]} choice is ${myBook[i]}.`);
}
