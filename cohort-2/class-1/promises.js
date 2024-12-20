// const fs = require("fs");

// function readsFile(callback) {
//     fs.readFile("toBeRead.txt", "utf-8", function(err, data) {
//         callback(data);
//     });
// }

// readsFile(function(data) {
//     console.log(data);
// });

// now with promise

// function readsFile() {
//     return new Promise(function(resolve) {
//         fs.readFile("toBeRead.txt", "utf-8", function(err, data) {
//             resolve(data);
//         })
//     });
// }

// readsFile().then(function(result) {
//     console.log(result);
// })

// function isEven(num) {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             if (num % 2 == 0) {
//                 resolve("Even");
//             }
//             else {
//                 resolve("Odd");
//             }
//         }, 1000);
//     });
// }

// isEven(12).then(function(data) {
//     console.log(data);
// });

// async-await

// without async-await

// function isPrime(num) {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             if (num < 2) {
//                 return resolve("Not Prime");
//             }
//             if (num === 2) {
//                 return resolve("Prime");
//             }
//             if (num % 2 === 0) {
//                 return resolve("Not Prime");
//             }
//             const limit = parseInt(Math.sqrt(num));
//             for (let i = 3 ; i <= limit ; i += 2){
//                 if (num % i == 0) {
//                     return resolve("Not Prime");
//                 }
//             }
//             resolve("Prime");
//         }, 1000);
//     });
// }

// isPrime(107).then(function(data) {
//     console.log(data);
// });

// with async-await

function isEven(num) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            if (num % 2 === 0) {
                resolve("Even");
            }
            else {
                resolve("Odd");
            }
        }, 2000);
    });
}

async function checkEven() {
    const result = await isEven(107);
    console.log(result);
}

checkEven();