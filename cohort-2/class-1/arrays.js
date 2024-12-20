// some useful array methods

const nums = [12, 34, 56];

//push() (adds a single element to the end of the array) 
nums.push(22);
// console.log(nums);

// pop() (removes last element of the array, doesn't take any argument)
// as of noe nums = [12, 34, 56, 22]
nums.pop();
// console.log(nums);  // it will give us the original array

// shift() (removes an element from the start of the array)
nums.shift();
// console.log(nums);

// unshift() (to place an element at the starting of the array)
nums.unshift(100);
// console.log(nums);

// first.concat(second)
const firstArray = [1, 2, 3, 4];
const secondArray = [5, 6, 7, 8];
const finalArray = firstArray.concat(secondArray);
// console.log(finalArray);

// forEach(function) (it is a call back function)
nums.forEach(function (value) {
    console.log(value);
});