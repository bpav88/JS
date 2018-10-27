// Write a function that deletes a character from the given position in the string. 
// Input: “Goodd morning!”, 3 
// Output: “Good morning!” 

function deleteChar(string, number) {
    var firstString = string.slice(0, number - 1);
    var secondString = string.slice(number, string.length);
    var newString = firstString + secondString;

    return newString;
}

console.log(deleteChar('Goodd morning!', 3));
