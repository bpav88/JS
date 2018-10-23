
function secondCharacter(string) {
    var array = [];
    var counter = 0;

    for (var i = 1; i < string.length; i = i + 2) {
        array[counter] = string[i];
        counter++;
    }
    return array;
}

console.log(secondCharacter("ana voli milovana"));
