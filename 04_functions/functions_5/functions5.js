//1. zadatak 

function min_max(a) {
    var i;
    var min = a[0];
    var max = a[0];
    var mini = 0;
    var maxi = 0;
    var t;

    for (i = 0; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
            mini = i;
        }
        if (a[i] > max) {
            max = a[i];
            maxi = i;
        }
    }

    t = a[mini];
    a[mini] = a[maxi];
    a[maxi] = t;

    return a;
}

console.log(min_max([1, 5, 9, 6, 3, 2, 8]));

//2. zadatak

function dev2(a) {
    var i;

    for (i = 0; i < a.length; i++) {
        a[i] = a[i] / 2 + 5;
    }
    return a;
}

console.log(dev2([3, 500, -10, 149, 53, 414, 1, 19]));

//3. zadatak

function grades(a, b) {

    if (51 <= b && b <= 60) {
        return "Student " + a + " je imao " + b + " poena i dobio je 6!";
    } else if (61 <= b && b <= 70) {
        return "Student " + a + " je imao " + b + " poena i dobio je 7!";
    } else if (71 <= b && b <= 80) {
        return "Student " + a + " je imao " + b + " poena i dobio je 8!";
    } else if (81 <= b && b <= 90) {
        return "Student " + a + " je imao " + b + " poena i dobio je 9!";
    } else if (91 <= b && b <= 100) {
        return "Student " + a + " je imao " + b + " poena i dobio je 10!";
    } else if (0 <= b && b <= 50) {
        return "Student " + a + " je imao " + b + " poena i pao je!";
    }
}

console.log(grades("Bogdan", 82));

//6. zadatak

function calculate() {
    var i;
    var even = 0;
    var odd = 0;
    var result;

    for (i = 1; i <= 1000; i++) {
        if (i % 2 == 0) {
            even = even + i;
        } else if (i <= 500) {
            odd = odd + i;
        }
    }
    result = (even - odd) * 12.5;
    return result;
}

console.log(calculate());

//7. zadatak  [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

function stringCheck(array) {
    var i;
    var newString = '';

    for (i = 0; i < array.length; i++) {
        if (typeof array[i] == 'string' && array[i].length > 1) {
            newString = newString + array[i][0] + array[i][1];
        }
    }
    return newString;
}

console.log(stringCheck(["M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A"]));

//8. zadatak

function reverseString(string) {
    var i;
    var reverse = '';

    for (i = string.length - 1; i >= 0; i--) {
        reverse = reverse + string[i];
    }
    return reverse;
}

console.log(reverseString('Belgrade Institute of Technology'));

//9. zadatak

function combination1to7() {
    var i, j;
    var str = '';

    for (i = 1; i <= 7; i++) {
        for (j = 1; j <= 7; j++) {
            if (i != j) {
                str = str + ',' + '(' + i + ',' + j + ')';
            }
        }
    }
    return str;
}

console.log(combination1to7());


//10. zadatak

function isPrime(a) {
    var i;

    for (i = 2; i < a / 2; i++) {
        if (a % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(7));

//11. zadatak

function isPalindrome(string) {
    var newString = "";

    for (var i = 0; i < string.length; i++) {
        if (string[i] !== " ") {
            newString = newString + string[i];
        }
    }

    for (var i = 0, j = newString.length - 1; i < newString.length / 2, j > newString.length / 2 - 1;
        i++ , j--) {
        if (newString[i] !== newString[j]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("ana voli milovana"));

//12. zadatak

function greatestCommonDivisor(number1, number2) {
    var divisors = [];
    var counter = 0;
    var maxDivisor = 1;

    for (var i = 1; i < number1; i++) {
        if (number1 % i === 0) {
            divisors[counter] = i;
            counter++;
        }
    }
    
    for (var i = 0; i < divisors.length; i++) {
        if (number2 % divisors[i] === 0 && divisors[i] > maxDivisor){
            maxDivisor = divisors[i];
        }
    }
    return maxDivisor;
}

console.log(greatestCommonDivisor(81, 9));

