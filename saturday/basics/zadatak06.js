
function reverseString(string) {
    var newString = "";

    if (string) {
        for (var i = string.length - 1; i >= 0; i--) {
            newString = newString + string[i];
        }
    } else {
        return "error";
    }
    return newString;
}

console.log(reverseString("bogdan"));
