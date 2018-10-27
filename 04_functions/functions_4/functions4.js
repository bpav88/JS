//1. zadatak

function check(a, b) {
    var i;
    var br = 0;

    for (i = 0; i < a.length; i++) {
        if (a[i] == b) {
            br++;
        }
    }
    if (br > 0) {
        return "Broj se nalazi u nizu!";
    } else {
        return "Broj se ne nalazi u nizu!";
    }
}

console.log(check([2, 4, 8, 4, 7, 9, 3], 8));

//2. zadatak

function positiveX2(a) {
    var i;

    for (i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            a[i] = a[i] * 2;
        }
    }
    return a;
}

console.log(positiveX2([2, 4, -8, 4, 7, -9, 3]));

//3. zadatak

function min(a) {
    var i;
    var min = a[0];
    var ind;

    for (i = 0; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
            ind = i;
        }
    }
    return min + " " + ind;
}

console.log(min([2, 4, -8, -14, 7, -9, 3]));

//4. zadatak

function min(a) {
    var i;
    var min = min2 = a[0];


    for (i = 0; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
        }
    }
    for (i = 0; i < a.length; i++) {
        if (a[i] != min && a[i] < min2) {
            min2 = a[i];
        }
    }
    return min2;
}

console.log(min([2, 4, -8, 4, -17, -9, 3]));

//5. zadatak

function positive_sum(a) {
    var i;
    var sum = 0;

    for (i = 0; i < a.length; i++) {
        if (a[i] > 0) {
            sum = sum + a[i];
        }
    }
    return sum;
}

console.log(positive_sum([2, 4, 9, -4, 6, -1, 10, 2]));

//6. zadatak

function simetric(a) {
    var i, j;

    for (i = 0, j = a.length - 1; i < a.length / 2, j > a.length / 2; i++ , j--) {
        if (a[i] != a[j]) {
            return "Niz nije simetrican!";
            break;
        }
    }
    return "Niz je simetrican";
}

console.log(simetric([2, 3, 4, 5, 6, 6, 5, 4, 3, 2]));

//7. zadatak

function leng(a) {
    var i, j;
    var niz = [];
    var br = 0;

    for (i = 0; i < a.length; i++) {
        for (j = 0; j < a[i].length; j++) {
            niz[br] = a[i][j];
            br++;
        }
    }
    return niz;
}

console.log(leng([[2, 3, 4, 5], [6, 7, 8, 9], [10, 11, 12, 13, 14, 15]]));

//8. zadatak

function con_arr(a, b) {
    var i;
    var niz = [];
    var br = 0;

    for (i = 0; i < a.length + b.length; i++) {
        if (br > a.length - 1) {
            niz[i] = b[i - a.length];
        } else {
            niz[i] = a[i];
            br++;
        }
    }
    return niz;
}

console.log(con_arr(["ana", " ", "voli"], [" ", "milovana"]));

//9. zadatak

function del(a, b) {
    var i;
    var niz = [];
    var br = 0;

    for (i = 0; i < a.length; i++) {
        if (a[i] != b) {
            niz[br] = a[i];
            br++;
        }
    }
    return niz;
}

console.log(del(["b", "o", "g", "d", "a", "n"], "b"));

//10. zadatak

function add_e(a, b, c) {
    var i;
    var niz = [];
    var br = 0;

    for (i = 0; i < c.length; i++) {
        if (i < b) {
            niz[br] = c[i];
            br++;
        } else if (i == b) {
            niz[br] = a;
            br++;
            niz[br] = c[i];
            br++;
        } else {
            niz[br] = c[i];
            br++;
        }
    }
    return niz;
}

console.log(add_e(78, 5, [2, 5, 3, 7, 9, 5, 3, 6]));