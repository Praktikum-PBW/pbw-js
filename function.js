// cara membuat function
function greet() {
    console.log("Good Morning");
    console.log("Good Afternoon");
    console.log("Good Night");
}

// cara memanggil function
greet();

// return function
function greet1() {
    return "Good Morning";
}
let regard = greet1();
console.log(regard);
console.log(greet1());

// return function array
function hobbies() {
    const listHobbies = ["Footbal", "Swimming", "Reading", "Writing", "Coding"];
    return listHobbies;
}
let hobby = hobbies();
for (const iterator of hobby) {
    console.log(iterator);
}

// function parameter
function sum(number1, number2) {
    let results = number1 + number2;
    return results;
}
console.log(sum(5, 5));

// spread operator
function average(...index) {
    let sum = index.length;
    let result = 0;
    for (const i of index) {
        result += i;
    }
    return result / sum;
}
let x = average(4, 8, 3, 7);
console.log(x);

// arrow function
const greet2 = () => {
    console.log('Good Morning');
}
greet2();

// arrow function parameter
const sum = (x, z) => {
    let result = x + z;
    return result;
}
let result1 = sum(5, 10);
console.log(result1);