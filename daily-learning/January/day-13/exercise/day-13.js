// 1. Create an object named courses that contain 9 courses offered by your department. Each course should be a property of the object , and value of each property should be the grade assigned to that course

const courses = {
  Mathematics: "A",
  Chemistry: "C",
  Biology: "B",
  Civics: "A",
  Literature: "A",
  History:"B",
  Art:"A",
  Economics: "B",
  Physics:"C"
};


// 2. Use a for...in loop to iterate over the courses object and display each course name along with its corresponding grade in the format: Course:[Course Name], Grade:[Grade].
// for (const key in courses) {
//   console.log(`Course ${key}: Grade ${courses[key]}`);
// }


// 3. Calculate and display the following: The total number of courses, The number of courses where the grade is The number of course where the grade is B or lower. 
// for (const key in courses) {
//   if (courses[key] === "A") {
//     const totalCourses = Object.keys(courses).length;
//     console.log (`Total number of courses: ${totalCourses}`);
//   }
// }

let totalCourses = 0;
let gradeACount = 0;
let gradeBlowerCount = 0;

for (const course in courses) {
  totalCourses++;
  if (courses [course] === "A") {
    gradeACount++;
  } else if (courses[course] === "B" || courses[course] === "C") {
    gradeBlowerCount++;
  }
}
console.log(`Total number of courses: ${totalCourses}`);
console.log(`Number of courses with grade A: ${gradeACount}`);
console.log(`Number of courses with grade B or lower: ${gradeBlowerCount}`);

// 4. Suppose you want to improve your grade. Write a plan(in words) to update the grade of at least 3 courses in the courses object. Explain which course you would improve and why.

courses.Chemistry = "A";  // Chemistry is fundamental to many fields like medicine, engineering, and computer sciences. 
courses.Biology = "A";    //  Biology is critical for health-related professions like medicine and understanding life sciences 
courses.Physics = "B";    //  Physics is essential for logical problem-solving and careers in engineering, data science, and technology.

console.log("Improved Grades:", courses);