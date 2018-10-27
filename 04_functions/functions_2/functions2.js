//1. zadatak

function string_check(a) {
    if (typeof a == "string") {
        return "Input jeste string!";
    } else {
        return "Input nije string!";
    }
}

console.log(string_check("12"));

//2. zadatak TODO problem sa false unosom!

function blank(a) {
    if (a == " ") {
        return "Blank";
    } else {
        return "Not a blank!";
    }
}

console.log(blank(false));

//3. zadatak

function string_line(a, b) {
    var i;
    var str = a;

    for (i = 1; i < b; i++) {
        str = str + a;
    }

    return str;
}

console.log(string_line("bla", 7));

//4. zadatak

function letter_app(a, b) {
    var i;
    var br = 0;

    for (i = 0; i < a.length; i++) {
        if (a[i] == b) {
            br++;
        }
    }
    if (br > 0) {
        return "Slovo " + b + " pojavljuje se " + br + " puta!";
    } else {
        return "Nema slova " + b;
    }
}

console.log(letter_app("ana voli milovana", "a"));

//5. zadatak

function first_pos(a, b) {
    var i;

    for (i = 0; i < a.length; i++) {
        if (a[i] == b) {
            return i + 1;
            break;
        }
        else {
            return -1;
        }
    }
}
console.log(first_pos("ana voli milovana", "z"));

//6. zadatak

function last_app(a, b) {
    var i;
    var p = 0;

    for (i = 0; i < a.length; i++) {
        if (a[i] == b) {
            p = i + 1;
        }
    }
    if (p != 0) {
        return p;
    } else {
        return -1;
    }
}

console.log(last_app("ana voli milovana", "v"));

//7. zadatak

function str2arr(a) {
    var i;
    var niz = [];

    for (i = 0; i < a.length; i++) {
        if (a[i] == " ") {
            niz[i] = null;
        } else {
            niz[i] = a[i];
        }
    }
    return niz;
}

console.log(str2arr("ana voli milovana"));

//8. zadatak

function prime(a) {
    var i;
    var br = 0;

    for (i = 1; i < a / 2; i++) {
        if (a % i == 0) {
            br++;
        }
    }
    if (br > 0) {
        return "Broj nije prost!";
    } else {
        return "Broj je prost!";
    }
}

console.log(prime(6));

//9. zadatak

function replace_blank(a, b) {
    var i;
    var str = "";

    for (i = 0; i < a.length; i++) {
        if (a[i] == " ") {
            switch (b) {
                case "+":
                    str = str + "+";
                    break;
                case "_":
                    str = str + "_";
                    break;
                default:
                    str = str + "-";
            }
        } else {
            str = str + a[i];
        }
    }
    return str;
}

console.log(replace_blank("ana voli milovana", "_"));

//10. zadatak

function str(a, b) {
    var i;
    var s = "";

    for (i = b; i < a.length; i++) {
        s = s + a[i];
    }
    s = s + "...";
    return s;
}

console.log(str("milovan", 3));

//11. zadatak

function numb() {
    var i;
    var a = ["1", "21", undefined, "42", "1e+3", Infinity];
    var niz = [];
    var br = 0;

    for (i = 0; i < a.length; i++) {
        if (isFinite(a[i])) {
            niz[br] = parseFloat(a[i]);
            br++;
        }
    }
    return niz;
}

console.log(numb());

//12. zadatak

function ret(a, b) {

    if (a == "m") {
        if (2018 - b < 65) {
            return "Gospodinu je ostalo do penzije " + (65 - (2018 - b)) + " godina!";
        } else {
            return "Gospodin je vec penzionisan!";
        }
    } else if (a == "f") {
        if (2018 - b < 60) {
            return "Gospodji je ostalo do penzije " + (60 - (2018 - b)) + " godina!";
        } else {
            return "Gospodja je vec penzionisana!";
        }
    } else {
        return "Pogresan unos!";
    }
}

console.log(ret("m", 1940));

//13. zadatak

function hum_num(a) {

    if (a % 100 >= 11 && a % 100 <= 13) {
        a = a + "th";
    } else if (a % 10 == 1) {
        a = a + "st";
    } else if (a % 10 == 2) {
        a = a + "nd";
    } else if (a % 10 == 3) {
        a = a + "rd";
    } else {
        a = a + "th";
    }
    return a;
}

console.log(hum_num(5));