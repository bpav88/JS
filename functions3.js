//13. zadatak

function human_number(a) {
    var s = '';

    if (a % 100 >= 11 && a % 100 <= 13) {
        s = a + 'th';
    } else if (a % 10 == 1) {
        s = a + 'st';
    } else if (a % 10 == 2) {
        s = a + 'nd';
    } else if (a % 10 == 3) {
        s = a + 'rd';
    } else {
        s = a + 'th';
    }
    return s;
}

console.log(human_number(2));

//2. zadatak

//3. zadatak 

function falsy() {

    var a = [NaN, 0, 15, false, -22, "", undefined, 47, null];
    var i;
    var j = 0;
    var x = [];


    for (i = 0; i < a.length; i++) {
        if (a[i]) {
            x[j] = a[i];
            j++;
        }
    }
    return x;

}

console.log(falsy());

//4. zadatak


function reverse(x) {
    var s = "";
    s = s + x;
    var a = "";
    var i;

    for (i = s.length - 1; i >= 0; i--) {
        a = a + s[i];

    }
    return parseInt(a);
}

console.log(reverse(12345));

//5.zadatak

function niz(a, b) {
    var c = [];
    x = b - 1;
    var i;

    for (i = 1; i <= b; i++) {
        c[x] = a[a.length - i];
        x--;
    }
    return c;
}
console.log(niz([1, 5, 2, 7, 4, 8, 4, 9], 6));

//6. zadatak

function niz(a, b) {

    var c = [];
    var i;

    for (i = 0; i < a; i++) {
        c[i] = b;

    }
    return c;
}

console.log(niz(4, 0));

// 7. zadatak

function savrsen_broj(a) {
    var sum = 0;
    var i;

    for (i = 1; i <= a / 2; i++) {

        if (a % i == 0) {
            sum = sum + i;
        }

    }
    if (sum == a) {

        return "savrsenbroj"

    } else {

        return "nijesavrsenbroj"
    }
}


console.log(savrsen_broj(28));

// 8 zadatak.

function word(a, b) {
    var i, j;
    var br1;
    var br2 = 0;

    for (i = 0; i < a.length; i++) {
        if (a[i] == b[0]) {
            br1 = 1;
            for (j = 1; j < b.length; j++) {
                if (a[i + j] == b[j]) {
                    br1++;
                }
            }
            if (br1 == b.length) {
                br2++;
            }
        }
    }
    return br2;
}
console.log(word('ana voli milovana bsdfgsdf ana fderg anaana', 'ana'));



