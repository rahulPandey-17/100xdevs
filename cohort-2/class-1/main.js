/*let firstName = "rahul";
let age = 24;
let isMarried = false;

// console.log("My name is " + firstName + ", and i am " + age + " years old.");

if (isMarried) {
    // console.log(firstName + " is married.");
}
else {
    // console.log(firstName + " is not married.");
}

// program to count and print from 0-1000

let sum = 0;

for (let i = 0 ; i <= 1000 ; i++) {
    sum += i;
}

// console.log("The answer is " + sum);*/

// question-1

/*let firstName = "Rahul";
let lastName = "Pandey";

console.log("Hello, " + firstName + " " + lastName);*/

// question-2

/*let gender = "M";

if (gender === "M") {
    console.log("Howdy sir");
}
else {
    console.log("Hi mam");
}*/

// arrays

/*const age = [21, 22, 23, 24, 25];

for (let i = 0 ; i < age.length ; i++) {
    if (age[i] % 2 === 0) {
        console.log(age[i]);
    }
}

// print biggest number in the array

let max = age[0];

for (let i = 0 ; i < age.length ; i++) {
    if (age[i] > max) {
        max = age[i];
    }
}
console.log(max);*/

// objects

/*const user1 = {
    firstName : "Rahul",
    gender : "male"
}

console.log(user1["firstName"]);
console.log(user1["gender"]);*/

// array of objects

/*const allUsers = [
    {
        firstName : "Rahul",
        gender : "male"
    },
    {
        firstName : "Akash",
        gender : "male"
    },
    {
        firstName : "Sanjana",
        gender : "female"
    }
];

for (let i = 0 ; i < allUsers.length ; i++) {
    if (allUsers[i]["gender"] == "male") {
        console.log(allUsers[i]["firstName"]);
    }
}*/

// functions

// function findSum(num1, num2) {
//     return num1 + num2;
// }

// console.log(findSum(10, 12));

// callbacks

// function sum(num1, num2, func) {
//     const result = num1 + num2;
//     func(result);
// }

// function displayActive(data) {
//     console.log("The result of the sum is " + data);
// }

// function displayPassive(data) {
//     console.log("Sum's result is " + data);
// }

// sum(10, 12, displayActive);

// setTimeout

// function greeting() {
//     console.log("Hello, World!");
// }
// setTimeout(greeting, 3000);

// setInterval

function greet() {
    console.log("JS");
}

setInterval(greet, 1000);