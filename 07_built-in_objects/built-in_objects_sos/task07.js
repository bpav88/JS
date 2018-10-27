// Write a function that checks if a given object has a given property with the given value. 
// Input: {x: 20, y: 30}, “x”, 20 
// Output: true


// Input: {x: 20, y: 30}, “z”, 20 
// Output: false 

// Input: {x: 20, y: 30}, “x”, 10 
// Output: false

function hasPropertyAndValue(object, property, value) {

    if (object.hasOwnProperty(property)) {
        if (object[property] === value) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

console.log(hasPropertyAndValue({ x: 20, y: 30 }, 'x', 20));
