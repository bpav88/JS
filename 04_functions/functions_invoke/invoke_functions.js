var sum = function (a, b) {
    return a + b;
}

var result = sum(4, 5);
console.log(result);

var result;
result = (
    function (a, b) {
        return a + b;
    }
)(4, 5);

console.log(result);


function sum4(num1, num2, num3, num4) {

    function sum2(a, b) {
        var result;
        result = a + b;
        return result;
    }



    return sum2(sum2(num1, num2), sum2(num3, num4));
}

console.log(sum4(1, 2, 3, 4));


function outter(a, b) {
    // a = 6, b = 7
    function inner(c) {
        // c = 5;
        return a + b + c;
    }

    var result;
    result = inner(5);
    console.log(result);
}

outerHeight(6, 7);