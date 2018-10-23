
function areSame(array1, array2) {
array1 = array1 || 0;
array2 = array2 || 0;

    if (array1.length === array2.length) {
        for (var i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i]) {
                return false;
            }
        }
        if (i === array1.length) {
            return true;
        }
    } else {
        return false;
    }
}

console.log(areSame([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));