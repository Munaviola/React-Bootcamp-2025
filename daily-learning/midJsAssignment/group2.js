// What is the this keyword in javaScript?
// The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run. it is refered to an object that is executing the current piece of code

const student = {
  name: `John`,
  age: 21,
  course: `Software Engineering`,
  introduction() {
      console.log(`Hi, I'm ${this.name}, a ${this.age}-year-old ${this.course} student.`);
  }
};

student.introduction();  



// Differentiate between dot notation and bracket notation for accessing object properties
// Dot notation is used to access object properties with a known, static property name, while Bracket notation allows you to access properties dynamically using a variable or expression that evaluates to the property name.

// what is an object method
// Object methods are functions that you can declare in an object type definition to implement behavior that you want objects of that type to perform. They are functions stored as properties inside an object.



// Create an object person with properties: name, age, gender and a method greet() that logs a greeting using templates strings

const person = {
  name: `Muna`,
  age: 25,
  gender: `Female`,
  greet() {
    console.log(`Hello, my name is ${this.name}. I am ${this.age} years old and I am ${this.gender}.`);
  }
};

person.greet();

const car = {
  brand: `Tesla`,
  model: `model S`,
  year: 2023,
  carInfo() {
    return `This car is a ${this.year} ${this.brand} ${this.model}`;
  }
};

console.log(car.carInfo());

car[`color`] = `blue`;
console.log(car);