////// SORTIRANJE sa .sort()
//// " Selection sort "

var a = new Array('C++', 'JS', 'Python', 'PHP', 'Java');

a.sort(function (string1, string2) {
    if (string1.length > string2.length) {
        return 1;
    }

    if (string1.length < string2.length) {
        return -1;
    }

    // if (string1.length == string2.length) {
    return 0;
    // }
});

console.log(a);


/////////////


var a = [11, 5, 2, 8, 9];

function sort(array) {

    var i;
    var j;

    for (i = 0; i < array.length; i++) {

        var element = array[i];

        for (j = i + 1; j < array.length; j++) {

            if (array[j] < element) {
                var tmp = array[j];
                array[j] = element;
                element = tmp;
            }
        }

        array[i] = element;
    }
}

sort(a);
console.log(a);