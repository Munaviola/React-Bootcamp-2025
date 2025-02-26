// 1 explain the difference between function declaration and function expression


// Function declarations are used when you need to call the function before it is defined. 

function declareFunction(myname) {
  return `Hi, my name is ${myname}`
}
const firstName = declareFunction(`Muna`)
console.log(firstName)

// Function expression you create a function expression and assign it to a variable that can be called.

const expressFunction = function(myname) {
  return `Hi, my name is ${myname}`
}
const middleName = expressFunction(`Viola`)
console.log(middleName)



let anotherExample = function (a, b) {
  return a + b;
}
let addTwoNumbers = anotherExample(52, 8);
console.log(`Sum: `,addTwoNumbers);

// What is an arrow function, and how does it handle the this keyword differently from a regular function?
// An arrow function is just a shorter way to write a function in JavaScript, using the syntax (=>). Its difference from a regular function is that it inherits the "this" keyword from the enclosing scope where it's defined, meaning it doesn't have its own "this" context, unlike a regular function which dynamically binds "this" based on how it's called.


//How do you use a switch statement in Javascript?

// The switch statement looks at an expression. It then compares that value with each case inside the switch.If a match is found, it runs the code inside that case. If no match is found, it runs the default case if provided.

let trafficLight = `green`;

switch (trafficLight) {
    case `red`:
        console.log(`You should Stop!` );
        break;
    case `yellow`:
        console.log(`Get ready!`);
        break;
    case `green`:
        console.log(`Go!`);
        break;
    default:
        console.log(`Wait for signal to go`);
};


// Write a function isEven() that accepts a number and returns "Even" if it is even and "Odd" if it is odd.

const isEven = (num) => {
  return num % 2 === 0 ? `${num} is Even` : `${num} is Odd`;
};

console.log(isEven(92));  
console.log(isEven(53));  
console.log(isEven(885)); 

// Create a function gradeCalculator() that accepts a score and returns grades: 90 and above: A, 80 to 89:B, 70 to 79: C, Below 70: F


const gradeCalculator = (score) => {
  if (score >= 90) {
      return `grade is A `;
  } else if (score >= 80) {
      return `grade is B `;
  } else if (score >= 70) {
      return `grade is C `;
  } else {
      return `grade is F `;
  }
};


console.log(gradeCalculator(93)); 
console.log(gradeCalculator(89)); 
console.log(gradeCalculator(70)); 
console.log(gradeCalculator(56)); 





const dayOfWeek = (num) => {
  switch (num) {
      case 1:
          return `Day 1 is Monday`;
      case 2:
          return `Day 2 is Tuesday`;
      case 3:
          return `Day 3 is Wednesday`;
      case 4:
          return `Day 4 is Thursday`;
      case 5:
          return `Day 5 is Friday`;
      case 6:
          return `Day 6 is Saturday`;
      case 7:
          return `Day 7 is Sunday`;
      default:
          return `Please enter a number between 1 and 7.`;
  }
};


console.log(dayOfWeek(3));  
console.log(dayOfWeek(9)); 

