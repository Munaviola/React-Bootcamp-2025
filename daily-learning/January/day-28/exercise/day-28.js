const sqrt24 = Math.sqrt(24);
console.log(sqrt24);

const sqrt96 = Math.sqrt(96);
console.log(sqrt96);

const sqrt48 = Math.sqrt(48);
console.log(sqrt48);

const sqrt122 = Math.sqrt(48);
console.log(sqrt122);



//2. what is the difference between Math.round(), Math.ceil() and Math.floor()?


//                          Answer : 
// Math.round() rounds the number to the nearest integer, Math.ceil() rounds the number up to the nearest integer, Math.floor() rounds the number down to the nearest integer.
// Math.round(): Rounds to the nearest integer based on decimal (rounds .5 and above up, below .5 down).
//Math.floor(): Always rounds down (towards negative infinity).
//Math.ceil(): Always rounds up (towards positive infinity).




// 3. Write a program that takes any positive or negative decimal number and determines whether
// Math.ceil() and Math.floor() return the same result for that number. Print a message indicating the result.
// Hint: For some negative numbers, Math.ceil() and Math.floor() behave differently.

function ceilAndFloor(num) {
  
  const ceil = Math.ceil(num);
  const floor = Math.floor(num);

  if (ceil === floor) {
      console.log(`Math.ceil() and Math.floor() return the same result which is ${ceil}`);
  } else {
      console.log(`Math.ceil() returns ${ceil} and Math.floor() returns ${floor}. They are different.`);
  }
}

ceilAndFloor(8.2);   
ceilAndFloor(-4.9);  
ceilAndFloor(5.0);   
ceilAndFloor(-3.0);  

