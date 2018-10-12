//1. zadatak

function if_is_string(a) {
    // var result = false;

    if (typeof a == "string") {
        return "String";
    } else {
        return "Nije string";
    }
    // return result;
}
var final = if_is_string(NaN);
console.log(final);

//2. zadatak

function a(a) {
    result = true;
    if (a == " ") {
        result = true;
    } else {
        result = false;
    }
    return result;
}
var final = a(" ");
console.log(final);

//3. zadatak

function x(a, b) {
    var i;
    var res = '';
    for (i = 1; i <= b; i++) {
        res = res + a;
    }
    return res;

}

console.log(x('Bla', 7));

//4. zadatak

function x(a, b) {
    var i;
    var br = 0;

    for (i = 0; i < a.length; i++) {
        if (a[i] == b) {
            br++;
        }
    }
    return br;
}
console.log(x('aleksandare', 'e'));

//5. i 6. zadatak

function a(a, b) {
    var i;
    var rez = 0;

    for (i = 0; i < a.length; i++) {
        if (a[i] == b) {
            rez = i + 1;
            //5. zadatak break;
        }
    }

    if (rez == 0) {
        return -1;
    } else {
        return rez;
    }
}


console.log(a("kilmanm", "m"));

//7. zadatak

function x(a) {
    var i;
    var niz = [];

    for (i = 0; i < a.length; i++) {
        if (a[i] == ' ') {
            niz[i] = null;

        } else {
            niz[i] = a[i];
        }
    }
    return niz;
}

console.log(x('Ana voli Milovana'));

//8. zadatak

function a(a) {
    var i;
    var rez = true;
    for (i = 2; i < a / 2; i++) {
        if (a % i == 0) {
            rez = false;
            break;
        }
    }
    if (rez == true) {
        return "Boj je prost"
    } else {
        return "Broj nije prost"
    }
}
var h = a(15);
console.log(h);

//9. zadatak

function replace(a, b) {
    var i;
    var st = "";
    for (i = 0; i < a.length; i++) {
        if (a[i] == " ") {

            switch (b) {
                case "+":
                    st = st + b;
                    break;
                case "_":
                    st = st + b;
                    break;
                default:
                    st = st + "-";
            }
        } else {
            st = st + a[i];
        }
    }
    return st;
}
var h = replace("ana voli milovana", "");
console.log(h);

//10. zadatak

function x(a, b) {
    var i;
    var res = '';

    for (i = b; i < a.length; i++) {
        res = res + a[i];
    }
    res = res + '...';
    return res;
}
console.log(x('milovan', 3));

//11. zadatak

function x(a) {
    //var a = ['1', '21', undefined, '42', '1e+3', Infinity];
    var niz = [];
    var i;
    var s = 0;

    for (i = 0; i < a.length; i++) {
        if (isFinite(a[i])) {
            niz[s] = parseFloat(a[i]);
            s++;
        }
    }
    return niz;
}

console.log(x([1, 5, 8, "ju", NaN, 87, 3, "56"])); // Pri unosu niza nije potrebno deklarisati niz u funkciji.

//12. zadatak

function pen(a, b) {
    var i;
    var c = 2018 - a;
    if (b == "f") {
        if (60 - c > 0) {
            return 60 - c;
        } else {
            return "Gospodja je vec u penziji"
        }
    } else if (b == "m") {
        if (65 - c > 0) {
            return 65 - c;
        } else {
            return "Gospodin je vec u penziji!"
        }
    } else {
        return 'Pogresan unos!';


    }

}

console.log(pen(1980, "m"));