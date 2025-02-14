// 1. Write a JavaScript function divide(a, b) that throws an error if b is 0, returns a/b otherwise, uses try...catch to handle the error

function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error(`It cannot go!!`);
    }
    return a / b;
  } catch (error) {
    console.log(`Error:`, error.message)
  }
}

console.log(divide(38, 2));
console.log(divide(79, 0));
console.log(divide(42, 6));
console.log(divide(8, 0));