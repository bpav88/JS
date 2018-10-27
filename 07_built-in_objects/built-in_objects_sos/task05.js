// Write a function that deletes every second element of the given array.
// Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
// Output: [3, 1, 90, 23, 67]

function deleteSecondElement(array) {

    for (var i = 0; i < array.length; i++) {
        array.splice(i + 1, 1);
    }

    return array;
}

console.log(deleteSecondElement([3, 5, 1, 8, 90, -4, 23, 1, 67]));
