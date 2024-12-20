// json is mainly used to send data to other machines
const user = {
    firstName : "Rahul",
    age : 24,
    gender : "M"
}

// JSON.stringify() (converts object into string)
const resultString = JSON.stringify(user);
console.log(resultString);

const data = '{"firstName" : "Rahul", "age" : 24, "gender" : "M"}';

// JSON.parse() (converts string to object)
const retrievedData = JSON.parse(data);

// now i can use object properties on the data
console.log(retrievedData);