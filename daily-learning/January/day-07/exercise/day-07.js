const firstName = 'Munachi'
const lastName = 'Echefu'
const myAge = 24
const favoriteColor = 'blue'
const dateToday = 'January 10, 2025'
const birthYear = 2000
const likesChocolate = 'true'
const school = 'Aptech'
const favoriteMovie = 'none'
const country = 'Nigerian'

//Mathematical Variables
const num1 = 70;
const num2 = 30;
const sum = num1 + num2;

console.log(sum)

const length = 5;
const width = 3;
const area = length * width;
console.log(`The area of the rectangle is: ${area}`);


let age = 25;
age += 5;
console.log(`My age in 5 years will be: ${age}`);


const height = 1.75;
console.log(`My height is: ${height} meters`);


const sideLength = 4;
const perimeter = 4 * sideLength;
console.log(`The perimeter of the square is: ${perimeter}`);


const distance = 120; // in kilometers
const time = 2; // in hours
const speed = distance / time;
console.log(`The speed is: ${speed} km/h`);


const price = 50;
const quantity = 3;
const totalCost = price * quantity;
console.log(`The total cost is: ₦${totalCost}`);


const radius = 7;
const circumference = 2 * Math.PI * radius;
console.log(`The circumference of the circle is: ${circumference.toFixed(2)}`);


const number = 6;
const square = number ** 2;
console.log(`The square of ${number} is: ${square}`);


const hoursWorked = 40;
const hourlyPay = 20;
const totalSalary = hoursWorked * hourlyPay;
console.log(`The total salary is: ₦${totalSalary}`);


// String Concatenation and Template Literals
const firstName = "John";
const lastName = "Doe";
const fullName = `${firstName} ${lastName}`;
console.log(`Full Name: ${fullName}`);


const name = "John";
const age = 25;
console.log(`Hello! My name is ${name}, and I am ${age} years old.`);


const name = "John";
console.log("My name is " + name + ".");


const city = "Lagos";
const state = "Nigeria";
console.log(`${city}, ${state}`);


const hobby = "playing guitar";
console.log(`I enjoy ${hobby} in my free time.`);


const name = "John";
const age = 25;
const hobby = "reading";
console.log(`My name is ${name}, I am ${age} years old, and I love ${hobby}.`);


const message = "Welcome to the team!";
const greeting = "Hello, ";
console.log(greeting + message);


const productName = "Laptop";
const price = 150000;
console.log(`Item: ${productName}, Price: ₦${price}`);


const quote = "The only limit to our realization of tomorrow is our doubts of today.";
const author = "Franklin D. Roosevelt";
console.log(`"${quote}" - ${author}`);


const friendName = "Alice";
console.log(`Hi ${friendName}, welcome to the group!`);


// Bonus Challenge: 10 Random Facts About Yourself

const myFacts = {
  name: "John Doe",
  age: 25,
  favoriteColor: "Blue",
  favoriteFood: "Pizza",
  hobby: "Playing guitar",
  dreamJob: "Software Developer",
  height: "1.75m",
  favoriteSport: "Football",
  favoriteBook: "1984 by George Orwell",
  favoriteMovie: "Inception"
};

// Display facts in a formatted list
console.log("Random Facts About Me:");
for (const [key, value] of Object.entries(myFacts)) {
  console.log(`${key}: ${value}`);
}
