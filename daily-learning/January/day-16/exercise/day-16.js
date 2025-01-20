// 1. Write a function called multiply that takes two numbers as parameters and returns their product.

// function multiply(a, b){
//   return a * b;
// }
// const product = multiply(4, 7);
// console.log(product) 

// 2. Define an object student with a method getInfo that prints the student's name and age.

// const student = {
//   name: `Muna`,  
//   age: 24,           
  
  
//   getInfo() {
//     console.log(`Name: ${this.name}, Age: ${this.age}`);
//   }
// };

// student.getInfo(); 


// 3. Rewrite the multiply function using arrow syntax.

// const multiply = (a, b) => a * b;
// console.log(multiply(4, 7)); 

// 4. Define a function expression called divide that divides two numbers and returns the result.

const divide = (a, b) => a / b;
console.log(divide(63, 3)); 


// 4. Write a function called processNumber that takes a number and a callback function. The callback should either double or triple the number.

function processNumber(number, callback) {
  return callback(number);
}
const tripleResult = (num) => num * 3;
const result = processNumber(5, tripleResult); 
console.log(result); 


// 6. Write a function called runTask that takes a string (task name) and a callback function. The callback should log: "Running task: [task name]"
 

function runTask(taskName, callback) {
  callback(taskName);
}

const logTask = (task) => {
  console.log(`Running task: ${task}`);
};

runTask("Clean the room", logTask); 
