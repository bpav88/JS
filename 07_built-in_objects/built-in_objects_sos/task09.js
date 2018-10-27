// Write a function that sorts an array of strings by the number of appearances of the letter ‘a’ or ‘A’. 
// Input: [‘apple’, ‘tea’,  ‘amazing’, ‘morning’, ‘JavaScript’]
// Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]


function countA(string) {
    var counter = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === 'a' || string[i] === 'A') {
            counter++;
        }
    }
    return counter;
}

function sortByA(array) {

    for (var i = 0, j = 1; i < array.length, j < array.length; i++ , j++) {
        if (countA(array[i]) > countA(array[j])) {
            var tmp;
            tmp = array[i];
            array[i] = array[j];
            array[j] = tmp;
        }
    }
    return array;
}

console.log(sortByA(['apple', 'tea', 'amazing', 'morning', 'JavaScript']));
