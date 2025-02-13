// Create 3 variables and assign floating point numbers to each

const fpNum1 = 4.7;
const fpNum2 = 9.3;
const fpNum3 = 2.8;

// Convert the result to a whole number
const wholeNum1 = Math.round(num1);
const wholeNum2 = Math.ceil(num1);
const wholeNum3 = Math.floor(num1);

console.log(wholeNum1);
console.log(wholeNum2);
console.log(wholeNum3);

// Create an array and assign the result to it

const assignArray = [wholeNum1, wholeNum2, wholeNum3];

console.log(assignArray);

// Task 2 Create a variable and assign the value to a random whole number netween 1 and 6

const randomNumber = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber);