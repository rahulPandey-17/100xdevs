// some useful string methods

let str = "Hello, World World";

// length (simply just use with string and dot operator)

function getLength(str) {
    console.log("String : " + str);
    console.log("Length : " + str.length);
}
// getLength(str);

// indexOf(target) (prints starting index)

function findIndexOf(str, target) {
    console.log("Original string : " + str);
    console.log("Index of " + target + " is : " + str.indexOf(target));
}
// findIndexOf("Rahul Pandey", "Pandey");

// lastIndexOf(target) (print the index of first letter of the last occurance of the word)

function findLastIndexOf(str, target) {
    console.log("Original string : " + str);
    console.log("Last index of " + target + " is : " + str.lastIndexOf(target));
}

// findLastIndexOf(str, "World");

// slice(str, starting index, ending index) or str.slice(starting index, ending index)

function sliceString(str) {
    console.log("Original String : " + str);
    console.log("Slice string b/w the indices 0 and 5 : " + str.slice(0, 5));
}
// sliceString(str);

// replace(source, target)

function replaceString(str) {
    console.log("Original string : " + str);
    console.log("After replacing World with Javascript : " + str.replace("World", "JavaScript"));
}
// replaceString(str);

// split("delemetor")
const words = str.split(" ");
// console.log(words);

// trim() (removes extra spaces from beginning and end of a string)

let value = "      javascript    ";
// console.log(value.trim());

// toUpperCase() (converts the string into upper case)

let lowerCaseString = "golang";
console.log(lowerCaseString.toUpperCase());

// toLowercase()  (converts the string into lower case)

let upperCaseString = "RUST";
console.log(upperCaseString.toLowerCase());