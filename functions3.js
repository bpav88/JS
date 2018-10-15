//1. zadatak

function insert(a, b, c) {
    var i;
    var str = "";

    if (typeof c == "undefined") {
        str = b + a;
    } else {
        for (i = 0; i < a.length; i++) {
            if (i == c - 1) {
                str = str + a[i] + b;
            } else {
                str = str + a[i];
            }
        }
    }
    return str;
}

console.log(insert("ana voli milovana", " i milana i", 8));

//2. zadatak

function arr() {
    var i;
    var str = "";
    var a = [NaN, 0, 15, false, -22, '', undefined, 47, null];

    for (i = 0; i < a.length; i++) {
        if (isFinite(a[i]) && a[i] != null) {
            str = str + a[i];
        }
    }
    return str;
}

console.log(arr());

//3. zadatak

function falsy() {
    var a = [NaN, 0, 15, false, -22, '', undefined, 47, null];
    var i;
    var niz = [];
    var br = 0;

    for (i = 0; i < a.length; i++) {
        if (a[i]) {
            niz[br] = a[i];
            br++;
        }
    }
    return niz;
}

console.log(falsy());

//4. zadatak

function reverse(a) {
    var i;
    var s = "";
    s = s + a;
    var t = "";

    for (i = s.length - 1; i >= 0; i--) {
        t = t + s[i];
    }
    return parseInt(t);
}

console.log(reverse(1234567));

//5. zadatak

function part_arr(a, b) {
    var i;
    var br = b - 1;
    var niz = [];

    for (i = a.length - 1; i > a.length - b - 1; i--) {
        niz[br] = a[i];
        br--;
    }
    return niz;
}

console.log(part_arr([1, 3, 6, 2, 6, 9, 4, 7, 8], 5));

//6. zadatak

function repeat(a, b) {
    var i;
    var niz = [];

    for (i = 0; i < a; i++) {
        if (typeof b == "undefined") {
            niz[i] = null;
        } else {
            niz[i] = b;
        }
    }
    return niz;
}

console.log(repeat(5));

//7. zadatak

function perfect_num(a) {
    var sum = 0;
    var i;
    for (i = 1; i <= a / 2; i++) {
        if (a % i == 0) {
            sum = sum + i;
        }
    }
    if (sum == a) {
        return "Perfect number!";
    } else {
        return "Number is not perfect!";
    }
}

console.log(perfect_num(28));

//8. zadatak

function find_str(a, b) {
    var i, j;
    var br
    var br2 = 0;

    for (i = 0; i < a.length; i++) {
        if (a[i] == b[0]) {
            br = 1;
            for (j = 1; j < b.length; j++) {
                if (a[i + j] == b[j]) {
                    br++;
                }
            }
            if (br == b.length) {
                br2++;
            }
        }
    }
    return "Broj ponavljanja stringa je: " + br2;
}

console.log(find_str("ana voli ana milovana", "ana"));

//9. zadatak

function hide_email(a) {
    var i, j, q;
    var s = "";

    for (j = 0; j < 5; j++) {
        s = s + a[j];
    }
    s = s + "...";
    for (i = 0; i < a.length; i++) {
        if (a[i] == "@") {
            for (q = i; q < a.length; q++) {
                s = s + a[q];
            }
        }
    }
    return s;
}

console.log(hide_email("pavlovic88@gmail.com"));

//10. zadatak

function most() {
    var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
    var i, j;
    var br = 0;
    var pr = 1;
    var e;

    for (i = 0; i < a.length; i++) {
        for (j = i; j < a.length; j++) {
            if (a[i] == a[j]) {
                br++;
            }
            if (br > pr) {
                pr = br;
                e = a[i];
            }
        }
        br = 0;
    }
    return e;
}

console.log(most());