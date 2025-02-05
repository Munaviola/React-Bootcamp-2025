// 1. Write a program that takes any positive or negative decimal number and determines whether
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

