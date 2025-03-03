// Explain the difference between a for loop and a while loop
// A "for loop" is used when you know exactly how many times you want to repeat a block of code. 
for (let i = 0; i < 8; i++){
  console.log(i);
};

// A "while loop" is used when you want to repeat a block of code until a certain condition becomes false
let count = 0;
while (count < 5) {
    console.log(count);
    count += 1;
}
console.log();


// What is a try...catch block used for in Javascript?
// The try statement allows you to define a block of code to be tested for errors while it is being executed. The catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

// Describe the use of the finally block in javascript
// The code opens a file and then executes statements that use the file; the finally block makes sure the file always closes after it is used even if an exception was thrown. 

// Write a for loop that prints numbers from 100 to 90 in descending order

for (let i = 100; i >= 90; i--) {
  console.log(i);
}

// Create a function findSquare() that accepts a number and uses a try...catch block to catch errors if the input is not a number

function findSquare(input) {
  try {
      // Convert the input to a number (in case it's a string representation of a number)
      const number = Number(input);

      // Check if the converted value is a valid number
      if (isNaN(number)) {
          throw new Error("Invalid input: Input must be a number.");
      }

      // Calculate and return the square of the number
      return number * number;
  } catch (error) {
      // Handle the error
      console.error(error.message);
      return null; // Return null to indicate an error
  }
}




console.log(findSquare("Hello world")); 


// Use a while loop to print numbers from 1 to 10


let oneToTen = 1;
while (oneToTen <= 10) {
    console.log(oneToTen);
    oneToTen++; 
};