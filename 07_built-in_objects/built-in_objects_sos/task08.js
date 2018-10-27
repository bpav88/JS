// Write a function that checks if every element of the first array is contained in the second array. Be careful with repetitions! 
// Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
// Output: true

//[1, 3, 3, 4] [1, 3, 3, 4, 8, 9, 11]

function isContained(array1, array2) {

    for (var i = 0; i < array1.length; i++) {
        var position = array2.indexOf(array1[i]);
        if (position == -1) {
            return false;
        } else {
            array2.splice(position, 1);
        }
    }
    return true;
}

console.log(isContained([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]));


