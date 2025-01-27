//Create an object called targetOne, targetTwo, targetThree. Each object should have a different key and value pairs, using the object.assign method, assign the three above object to a new object called source.

const targetOne = {
    name: `muna`,
    age: 25,
    isVerified: true
};

const targetTwo = {
    favoriteColor: `blue`,
    school: `Aptech`
};

const targetThree = {
    hobby: `gaming`,
    complexion: `dark`
};

const source = Object.assign(targetOne, targetTwo, targetThree);

// console.log(source);

// Create a frozen object called subZero using the Object.freeze method, add a new property to the object

// const subZero = {
//     kitana: `princess`,
//     sonia: `army`,
//     sindel: `queen`,
//     jade: `green`,
//     millena: `purple`
// }

const subZero = Object.freeze (
    {
    kitana: `princess`,
    sonia: `army`,
    sindel: `queen`,
    jade: `green`,
    millena: `purple`
    }
);

subZero.scorpion = `yellow`;

// console.log(subZero);


// Create a sealed object called lockDown using the Object.seal method, delete an existing property, add a new property and then modify an existing property.

const lockDown = Object.seal(
    {
        spain: true,
        nigeria: false,
        japan: true,
        currency: `naira`,
        capital: `tokyo`
    }
)

lockDown.countryCode = `+234`
lockDown.japan = false
delete lockDown.spain

// console.log(lockDown);

// Create 5 objects and use the spread operator to merge all the 5 objects to an object called merge

const object1 = {
    classMates: [`John`, `Alex`, `Jacob`]
}

const object2 = {
    tvStation: `E! Entertainment`
}
const object3 = {
    cableTv: `Dstv`
}
const object4 = {
    kitchenUtensil: `spoon`
}
const object5 = {
    dayOfTheWeek: `Monday`
}

const merge ={
    ...object1, ...object2, ...object3, ...object4, ...object5
}

console.log(merge);