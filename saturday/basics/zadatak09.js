
function replaceBlanks(string) {
    var newString = "";

    for (var i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            newString = newString + "-";
        } else {
            newString = newString + string[i];
        }
    }
    return newString;
}

console.log(replaceBlanks(" ana voli milovana "));
