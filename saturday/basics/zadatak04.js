
function isSameFirstLast(array) {
    if (array[0] === array[array.length - 1]) {
        return true;
    } else {
        return false;
    }
}

console.log(isSameFirstLast(["a", "n", "a", "m", "i", "l", "o", "a"]));
