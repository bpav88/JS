//1. zadatak

function max(a, b) {
    if (a < b) {
        return b;
    }
    else if (a > b) {
        return a;
    }
    else {
        return "Brojevi su jednaki!";
    }
}

console.log(max(7, 7));

//2. zadatak

function odd(a) {
    if (a % 2 == 0) {
        return "Broj je paran!";
    } else {
        return "Broj je naparan!";
    }
}

console.log(odd(0));

//3. zadatak

function three_digit(a) {
    s = "";
    s = s + a;

    if (s.length == 3) {
        return "Broj je trocifren!";
    } else {
        return "Broj nije trocifren!";
    }
}

console.log(three_digit(345));

//4. zadatak

function mean(a, b, c, d) {
    var m = (a + b + c + d) / 4;
    return m;
}
console.log(mean(4, 1, 7, 12));

//5. zadatak

function square(a) {
    var i, j;
    var st = "";

    for (j = 0; j < a; j++) {
        if (j == 0 || j == a - 1) {
            for (i = 0; i < a; i++) {
                st = st + "*";
            }
            st = st + "\n";
        } else {
            for (i = 0; i < a; i++) {
                if (i == 0) {
                    st = st + "*";
                } else if (i == a - 1) {
                    st = st + "*\n";
                } else {
                    st = st + " ";
                }
            }
        }
    }
    return st;
}

console.log(square(10));

//6. zadatak

function stars(a, b, c) {
    var i;
    var s = p = q = "";

    for (i = 0; i < a; i++) {
        s = s + "*";
    }
    for (i = 0; i < b; i++) {
        p = p + "*";
    }
    for (i = 0; i < c; i++) {
        q = q + "*";
    }

    return (s + "\n" + p + "\n" + q);
}

console.log(stars(2, 7, 5));

//7. zadatak

function digit(a) {
    var s = "";
    s = s + a;
    return s.length;
}

console.log(digit(12));

//8. zadatak

function appear(a, b) {
    var i;
    var br = 0;

    for (i = 0; i < a.length; i++) {
        if (a[i] == b) {
            br++;
        }
    }
    if (br > 0) {
        return br;
    } else {
        return "Broj ne postoji u nizu!";
    }
}

console.log(appear([2, 6, 2, 7, 9, 5, 3, 6, 9, 5, 2], 2));

//9. zadatak

function odd_sum(a) {
    var i;
    var sum = 0;

    for (i = 0; i < a.length; i++) {
        if (a[i] % 2 != 0) {
            sum = sum + a[i];
        }
    }
    return sum;
}

console.log(odd_sum([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//10. zadatak

function letter_a(a) {
    var i;
    var br = 0;

    for (i = 0; i < a.length; i++) {
        if (a[i] == "a" || a[i] == "A") {
            br++;
        }
    }
    return "Broj pojavljivanja slova a u reci je: " + br;
}

console.log(letter_a("Anabela"));

//11. zadatak

function string_x(a, b) {
    var i;
    var str = "";

    for (i = 0; i < b; i++) {
        str = str + a;
    }
    return str;
}

console.log(string_x("Bogdan", 5));

