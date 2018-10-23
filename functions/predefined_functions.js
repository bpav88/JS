//Global predefined functions

var result = parseInt('a43', 16); // drugi element radix
console.log(result);

var result = parseFloat('34.35');
console.log(result);

var result = 'abc' * 2;
console.log(isNaN(result));

function ourNaN(n) {
    if (typeof n == 'number' && n != n) {
        return true;
    } else {
        return false;
    }
}

console.log(isFinite(Infinity));

function x(a, b, c) {
    var i;
    var str = '';

    for (i = 0; i < a.length; i++) {
        if (i == c - 1) {
            str = str + a[i] + b;
        } else {
            str = str + a[i];
        }
    }
    return str;
}
console.log(x('pera petrovic advokat', 'je ', 14));

