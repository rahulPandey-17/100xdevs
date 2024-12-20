const currentDate = new Date();
// console.log(currentDate);

// to get current month
// console.log("Current month in numeric format : " + (currentDate.getMonth() + 1)); // for current month use +1 as indexing starts from 0

// to get current day
// console.log("Gives current day in numeric format : " + currentDate.getDay());   // gives day in number format (1 is monday, 2 is tuesday and so on)

// to get current year
// console.log("Gives current year : " + currentDate.getFullYear());

// to get time
// console.log("Time in milliseconds since epoch : " + currentDate.getTime());  // it will give time in milliseconds from the epoch

// to get full time in local region format
// console.log("Full time in local format : " + currentDate.toLocaleTimeString());

// to get info about current hour, minute and seconds
// console.log("Hours : " + currentDate.getHours());
// console.log("Minutes : " + currentDate.getMinutes());
// console.log("Seconds : " + currentDate.getSeconds());

// a use case of Date class is that we can find how much does it take a function to execute

function factorial(num) {
    if (num == 0 || num == 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

const bCall = new Date();
const beforeFunctionCall = bCall.getTime();

console.log(factorial(10));

const aCall = new Date();
const afterFunctionCall = aCall.getTime();

console.log("Total time elapsed : " + ((afterFunctionCall - beforeFunctionCall) / 1000) + " seconds.");