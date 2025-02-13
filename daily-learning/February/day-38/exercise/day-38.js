// given an object 

const student ={
  name: "John",
  age: 20,
  grade: 'A'
}


  for (const keys in student){
          console.log(keys + `: ` + student[keys]);
  }

  const colors = [`Red`, `Green`, ` Blue`];

  for(const color of colors) {
    console.log(color);
  }