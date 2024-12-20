// function to find sum from 1-100

function findSum() {
    let sum = 0;
    for (let i = 1 ; i <= 100 ; i++) {
        sum += i;
    }
    return sum;
}

// console.log(findSum());

// callback functions (passing functions as arguments to another function)

// brute-force code without any callback

function findSquare(num) {
    return num ** 2;
}

function findSumOfSquares(num1, num2) {
    const value1 = findSquare(num1);  // calling a function inside another function
    const value2 = findSquare(num2);
    return value1 + value2;
}

// console.log(findSumOfSquares(2, 2));

// lets add two more functions here

function findCube(num) {
    return num ** 3;
}

function findSumOfCubes(num1, num2) {
    const value1 = findCube(num1);
    const value2 = findCube(num2);
    return value1 + value2;
}

// console.log(findSumOfCubes(2, 2));

// now in this approach we can see that we are repeating logic (in findSumOfSquare and findSumOfCubes), which is not a good practice
// to avoid that we can use callback functions

function sumOfSomething(num1, num2, callback) {
    console.log(callback);
    const value1 = callback(num1);
    const value2 = callback(num2);
    return value1 + value2;
}

// console.log(sumOfSomething(10, 20, findSquare));

// anonymous function (function without a name, because you directly define the anonymous function in the argument list so it is not accesible from anyother part of code, hence no name is needed)
console.log(sumOfSomething(4, 4, function (num) {
    return num ** 4;
}))