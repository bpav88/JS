// Write a function that checks if a given string contains digit 5.
// Input: “1b895abd” 
// Output: true
// Input: “1bser9re”
// Output: false

function contains5(string) {
    if (string.indexOf('5') != -1) {
        return true;
    } else {
        return false;
    }
}

console.log(contains5('1bser95re'));
