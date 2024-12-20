// setTimeout() is a asynchronous function

// setTimeout(function () {
//     console.log("Hello");
// }, 2000);
// console.log("And here it comes");

/*
 * some other async functions provided by js are
 * 1. setInterval
 * 2. fs.readFile
 * 3. Fetch
*/

// reading a file in js

// const fs = require("fs");

// fs.readFile("toBeRead.txt", "utf-8", function(err, data) {
//     console.log(data);
// })

// console.log("User details coming up in few sec :\n");

console.log("start");

setTimeout(function() {
    console.log("async-1");
}, 10000);

let sum = 0;

for (let i = 0 ; i < 10000 ; i++) {
    sum += i;
}

console.log(sum);
console.log("fininsh");