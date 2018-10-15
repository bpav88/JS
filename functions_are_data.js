function sum(a, b) {
    return a + b;
}

console.log(sum(3, 5));

var sum;
sum = function (a, b) {
    return a + b;
};

console.log(sum(3, 5));

console.log(typeof sum);


// Write a function to count vowels in a provided string. If you are  not aware of indexOf function, try to use switch statement.
// Vowels are a, e, i, o, and u as well as A, E, I, O, and U. 

var vowels = function (a) {

    var br = 0;
    var i;

    for (i = 0; i < a.length; i++) {
        switch (a[i]) {
            case 'a':
            case 'A':
            case 'e':
            case 'E':
            case 'i':
            case 'I':
            case 'o':
            case 'O':
            case 'u':
            case 'U':
                br++;
        }
    } return br;
};

var test = vowels('U lazi s kratke nog');
console.log(test);

// Write a function that combines two arrays by alternatingly taking elements.

// [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

function combinesArrays(a, b) {
    var i;
    var niz = [];
    var br = 0;
    for (i = 0; i < a.length; i++) {
        niz[br] = a[i];
        br++;
        niz[br] = b[i];
        br++;
    }
    return niz;
}
var test = combinesArrays(['a', 'b', 'c'], [1, 2, 3]);
console.log(test);

// Write a function that rotates a list by k elements.

// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
function rotate(a, b) {
    var i;
    var niz = [];
    var br = 0;

    for (i = 0; i < a.length; i++) {
        if (i < b) {
            niz[a.length - b + i] = a[i];
        } else {
            niz[br] = a[i];
            br++;
        }
    }
    return niz;
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7, 8], 5));


// Write a function that takes a number and returns array of its digits.

function digit(a) {
    s = "" + a;
    var i;
    var niz = [];

    for (i = 0; i < s.length; i++) {
        niz[i] = parseInt(s[i]);
    }
    return niz;
}
console.log(digit(213445));


// Write a program that prints a multiplication table for numbers up to 12.

function multiplication() {
    var i;
    var j;
    var str = '';
    for (i = 1; i <= 12; i++) {
        for (j = 1; j <= 12; j++) {
            str = str + " " + i * j;
        }
        console.log(str);
        str = '';
    }
    return
}

// Write a function to input temperature in Centigrade and convert to Fahrenheit.



// Write a function to find the maximum element in array of numbers. Filter out all non-number elements.



// Write a function to find the maximum and minimum elements. Function returns an array.



// Write a function to find the median element of array.



// Write a function to find the element that occurs most frequently.



// Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.



// Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.



// Write a function to find all the numbers greater than the average.



// The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
// Starvation: less than 15
// Anorexic: less than 17.5
// Underweight: less than 18.5
// Ideal: greater than or equal to 18.5 but less than 25
// Overweight: greater than or equal to 25 but less than 30
// Obese: greater than or equal to 30 but less than 40
// Morbidly obese: greater than or equal to 40




// Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

// For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********




