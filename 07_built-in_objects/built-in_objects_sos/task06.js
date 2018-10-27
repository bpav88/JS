// Write a function that replaces the elements of the given array between two positions with their doubled values. 
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6 
// Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]

function replaceElementsWithDoubles(array, number1, number2) {

    for (var i = 0; i < number2 - 1; i++) {
        var tmpElement = array[number1 + i] * 2;
        array.splice(number1 + i, 1, tmpElement);

    }

    return array;
}


function replaceElementsWithDoubles(array, number1, number2) {

    for (var i = number1; i < number2 - 1; i++) {
        array[i] = array[i] * 2;
    }

    return array;
}

console.log(replaceElementsWithDoubles([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6));
