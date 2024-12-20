// parseInt() (extracts integer parts from a string or floats)

// console.log(parseInt("100"));
// console.log(parseInt("100xdevs"));          // if the letters are after number it will give the preceding number as output
// console.log(parseInt("10.045"));            // for floating point numbers it eleminates digits after the decimal
// console.log(parseInt("bigNumber10045"));    // if number is after some letters it will give NaN as output


// parseFloat()

console.log(parseFloat("100"));             // if it encounters a integer it will give that int as output
console.log(parseFloat("100xdevs"));        // same as above if number is encountered first it will give that number as output
console.log(parseFloat("10.045"));          
console.log(parseFloat("bigNumber10045"));  // if number is after some letters it will give NaN as output