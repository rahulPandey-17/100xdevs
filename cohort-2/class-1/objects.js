const sampleObject = {
    key1 : "value1",
    key2 : "value2",
    key3 : "value3",
};

// some Object methods

// to print the whole object
console.log(sampleObject);

// Object.keys(obj) (to print keys of object)
console.log(Object.keys(sampleObject));   // returns an array

// Object.values(obj) (to print values for corrosponding keys)
console.log(Object.values(sampleObject));  // returns an array

// Object.entries(obj) (returns an array of arrays of key-value pairs where each key-value pair is a seperate entry as an array itself)
console.log(Object.entries(sampleObject));

// hasOwnProperty() (to check if object contains a particular key-value pair)
console.log(sampleObject.hasOwnProperty("key2")); // returns a boolean

// Object.assign(target, source) (to copy properties(key-value pairs) of a souce obj to a target obj)
const modifedObject = Object.assign({}, sampleObject, {key4 : "value4"});  // returns a new modified object
console.log(modifedObject);