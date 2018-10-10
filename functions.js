// function sum(a, b) {
//     // a = 11
//     // b = 84
//     var result;
//     result = a + b;

//     return result;
// }

// var final_result;
// final_result = sum(43, 12);

// console.log(final_result);

// function sum_of_all_arguments() {
//     var result = 0;
//     var i;

//     for (i = 0; i < arguments.length; i++) {
//         result = result + arguments[i];
//     }
//     return result;
// }

// var sum;

// sum = sum_of_all_arguments(12, 12, 13, 51);
// console.log(sum);
//1 zadatak
function max(a, b) {
    if (a > b) {
        return a;
    } else if (a < b) {
        return b;
    } else {
        return 'Brojevi su jednaki!';
    }
}

console.log(max(8, 12));
//drugi zadatak
function odd_even(a) {
    if (a % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }
}
console.log(odd_even(120));
//treci zadatak
function three_dig(a) {
    var i = 0;
    while (a >= 1) {
        a = a / 10;
        i++;

    }
    if (i == 3) {
        return "Broj ima tri cifre!"
    } else {
        return "Broj nema tri cifre!"
    }
}

console.log(three_dig(234));
//treci zadatak
function three_dig(a) {
    if (a < 1000 && a > 99) {
        return "Broj je trocifren"
    } else {
        return "Broj nije trocifren"
    }
}
console.log(three_dig(8895));

//4 zadatak
function arithmetic(a, b, c, d) {
    return (a + b + c + d) / 4;
}
console.log(arithmetic(45, 23, 13, 6));

//7. zadatak

function dig(a) {
    var i = 0;
    while (a >= 1) {
        a = a / 10;
        i++;
    }
    return i;
}
console.log('Zadati broj ima ' + dig(1357568673245) + ' cifara!');

//8. zadatak

function appearances(a) {
    var niz = [2, 4, 7, 8, 7, 7, 1, 4];
    var i;
    var x = 0;
    for (i = 0; i < niz.length; i++) {
        if (a == niz[i]) {
            x++;
        }
    }
    return x;
}
console.log(appearances(1));

//9. zadatak

function sum_odd(a) {
    var i;
    var sum = 0;
    for (i = 0; i < a.length; i++) {
        if (a[i] % 2 != 0) {
            sum += a[i];
        }
    }
    return sum;
}
console.log(sum_odd([11, 12, 13, 14, 15, 20]));

//10. zadatak

function letter_a(a) {
    var i;
    var res = 0;
    for (i = 0; i < a.length; i++) {
        if (a[i] === "a") {
            res++;
        }
    }

    if (res > 0) {
        return res;
    } else {
        return "Ovde nema malog slova a"
    }

}

console.log(letter_a("aaaaagnskjgs"));