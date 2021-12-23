console.log("JavaScript is running");
// Log every number from 0 to 10
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

// Log every number from 4 to -16
for (let i = 4; i >= -16; i--) {
  console.log(i);
}
let j = 4;
while (j >= -16) {
  console.log(j);
  j--;
}

// Log every fourth number from 8 to 41
for (let i = 8; i <= 41; i += 4) {
  console.log(i);
}
let k = 8;
while (k <= 41) {
  console.log(k);
  k += 4;
}

// The Classic Fizzbuzz Program
for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i, "Fizzbuzz");
  } else if (i % 3 === 0) {
    console.log(i, "Fizz");
  } else if (i % 5 === 0) {
    console.log(i, "buzz");
  }
}
let m = 0;
while (m <= 100) {
  if (m % 3 === 0 && m % 5 === 0) {
    console.log(m, "Fizzbuzz");
  } else if (m % 3 === 0) {
    console.log(m, "Fizz");
  } else if (m % 5 === 0) {
    console.log(m, "buzz");
  }
  m++;
}
