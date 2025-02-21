// 1. Explain the difference between let, const and var with examples



let ans1 = `"let" has block-scope, meaning a variable declared with "let" is only accessible within the block where it's declared. It can be reassigned but not re-declared`;

if (true) {
  let letExample = `John`; 
  console.log(letExample); 

  letExample = `Jane`; 
  console.log(letExample); 
}

var ans2 = `"var" has function-scope, meaning a variable declared with "var" can be accessed anywhere within the function it's declared in; can be re-declared and reassigned within its scope.`;

function varExample() {
  var age = 25;
  console.log(age); 

  age = 30;
  console.log(age); 
}


const ans3 = `"const" also has block-scope, but unlike "let", a variable declared with "const" cannot be reassigned after it has benn initialized`;

const constExample = 123445;

console.log(constExample); 

// constExample = 544321; This will throw an error when run


// So in other words, var declarations are globally scoped or function scoped while let and const are block scoped. var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared. const variables can neither be updated nor re-declared. They are all hoisted to the top of their scope.


// 2. What are primitive data types?
// Primitive data types are number, string, boolean, null, undefined, symbol.
const numberExample = 35
console.log(numberExample); //Represents numerical data, supporting floating-point numbers

const stringExample = `muna`
console.log(stringExample); //Represents textual data. Strings are enclosed in quotes

const booleanExample = true
console.log(booleanExample); // Represents truth values: true or false

let undefinedExample;
console.log(undefinedExample); // A variable not assigned a value is of type undefined.

const nullExample = null
console.log(nullExample); // Represents a special null value indicating the absence of any value.

let id = Symbol("uniqueID");
let anotherId = Symbol("uniqueID");
console.log(id === anotherId); // Represents a unique and immutable value, often used for object property keys.


// 3. Explain the difference between .map() and .forEach methods

//The forEach() method does not returns a new array based on the given array. The map() method returns an entirely new array.