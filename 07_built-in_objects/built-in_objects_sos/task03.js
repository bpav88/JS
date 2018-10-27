// Write a function that inserts a given character on a given position in the string.
// Input: “Goo morning”, 4, ‘d’ 
// Output: “Good morning” 

function insertChar(string, position, insertString) {
    var firstPart = string.slice(0, position - 1);
    var lastPart = string.slice(position - 1, string.length);

    var newString = firstPart + insertString + lastPart;

    return newString;

}

console.log(insertChar('Goo morning', 4, 'ddd'));
