
//1.zadatak

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

//2. zadatak

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

//3. zadatak

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

//4. zadatak

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


//5. zadatak

function multiplication() {
    var i;
    var j;
    var str = '';
    niz = '';

    for (i = 1; i <= 12; i++) {
        for (j = 1; j <= 12; j++) {
            str = str + "\t" + i * j;
        }
        niz = str + "\n";
        console.log(str);

        str = '';

    }
    return niz;
}

console.log(multiplication());

//6. zadatak

function convertCToF(number) {
    return number * 9 / 5 + 32;
}

console.log(convertCToF(25));

//7. zadatak

function maxNumberOfArray(array) {
    var maxNumber = -Infinity;

    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === "number") {
            if (array[i] > maxNumber) {
                maxNumber = array[i];
            }
        }
    }
    return maxNumber;
}

console.log(maxNumberOfArray([1, 2, 3, "11", 9, 5, 3, 7, "12", 4, 6]));

//8. zadatak

function maxMinElement(array) {
    var max = array[0];
    var min = array[0];

    for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
        if (array[i] < min) {
            min = array[i];
        }
    }
    return [min, max];
}

console.log(maxMinElement([1, 4, 6, 8, 3, 9, 21, 6, 4, -9, 3, 6, 2, 5]));

//9. zadatak

function medianElement(array) {
    var median;

    if (array.length % 2 == 0) {
        median = array[array.length / 2 - 1];
    } else {
        median = array[(array.length - 1) / 2];
    }
    return median;
}

console.log(medianElement([1, 2, 3, 4, 5]));

//10. zadatak

function mostOccurElement(array) {
    var element;
    var counter = 0;
    var maxCounter = 0;

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            if (array[i] === array[j]) {
                counter++;
            }
        }
        if (counter > maxCounter) {
            maxCounter = counter;
            element = array[i];

        }
        counter = 0;
    }
    return element;
}

console.log(mostOccurElement([1, 2, 3, 6, 2, 4, 5, 2, 6, 7, 9, 6, 3, 6]));

//11. zadatak

function returnFirstMiddleLast(array) {
    if (array) {
        var firstElement = array[0];
        var middleElement = array[(array.length - 1) / 2];
        var lastElement = array[array.length - 1];

        if (array.length % 2 === 0) {
            return [firstElement, lastElement];
        } else {
            return [firstElement, middleElement, lastElement];
        }
    } else {
        return [];
    }
}

console.log(returnFirstMiddleLast([1, 2, 3, 4, 5, 6]));

//12. zadatak

function average() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum / arguments.length;
}

console.log(average(12, 9, 30, 4, 5));

//13. zadatak

function greaterThenAverage(array) {
    var sum = 0;
    var avg = 0;
    var newArray = [];
    var counter = 0;

    for (var i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    avg = sum / array.length;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > avg) {
            newArray[counter] = array[i];
            counter++;
        }
    }
    return newArray;
}

console.log(greaterThenAverage([1, 2, 3, 4, 5, 6, 7, 8]));

//14. zadatak

function bodyMassIndex(weight, height) {
    var bmi;

    bmi = weight / (height * height);
    console.log(bmi);

    if (bmi < 15) {
        return "Starvation!";
    } else if (15 < bmi && bmi < 17.5) {
        return "Anorexic!";
    } else if (17.5 < bmi && bmi < 18.5) {
        return "Underweight!";
    } else if (18.5 < bmi && bmi < 25) {
        return "Ideal!";
    } else if (25 < bmi && bmi < 30) {
        return "Overweight!";
    } else if (30 < bmi && bmi < 40) {
        return "Obese!";
    } else if (40 < bmi) {
        return "Morbidly obese!";
    }
}

console.log(bodyMassIndex(100, 1.8));

//15. zadatak

function decorativeArray(array) {
    var maxLength = 0;

    for (var i = 0; i < array.length; i++) {
        if (maxLength < array[i].length) {
            maxLength = array[i].length;
        }
    }
}
