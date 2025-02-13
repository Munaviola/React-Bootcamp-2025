// for ( let i = 1; i <= 10; i++){
//   if (i % 2 === 0){
//     console.log(i + ` is even`);
//   } else {
//     console.log(i + ` is odd`);
//   }
// };

// const getUserScore = 95

// if (getUserScore >= 92){
//   console.log(`Excellent`);
// }else if (getUserScore >= 75){
//   console.log(`Good`);
// } else if (getUserScore >= 62){
//   console.log (`Average`);
// }else {
//   console.log(`fail`);
// };

// console.log(getUserScore);


// const fruit = "apple";

// switch (fruit) {
//     case "apple":
//         console.log("Apples are red.");
//         break;
//     case "banana":
//         console.log("Bananas are yellow.");
//         break;
//     case "grape":
//         console.log("Grapes are purple.");
//         break;
//     default:
//         console.log("Unknown fruit color.");
// }


// const currentHour = 19;

// if (currentHour >= 6 && currentHour < 12){
//     console.log(`Good Morning!`);
// }else if (currentHour >= 12 && currentHour < 18){
//     console.log(`Good afternoon!`);
// }else if (currentHour >= 18 && currentHour < 24){
//     console.log(`Good evening!`);
// }else{
//     console.log(`It is Night Time!`);
// }

function checkNumber(num) {
  if (num > 0) {
    console.log(num + ` is a positive number`);
  }else if (num < 0) {
    console.log(num + ` is a Negative number`);
  }else {
    console.log (num + ` is zero`)
  }
}

checkNumber(53);
checkNumber(-27);
checkNumber(0);