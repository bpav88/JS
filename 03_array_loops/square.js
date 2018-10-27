/*var n = 2;

var v, k;

for (v = 0; v < n; v++) {
    if (v == 0 || v == n - 1) {
        var s = "";
        for (k = 0; k < n; k++) {
            s = s + "*";
        }
    } else {
        s = "*";
        for (k = 1; k < n - 1; k++) {
            s = s + " ";
        }
        s = s + "*";
    }
    console.log(s);
    //console.log("/n");
}*/

/*var i;
var j;
var n = 5;
var s;

//provera da li je n parno
if (n % 2 == 0) {
    console.log("Pogresna vrednost");
}
for (i = 0; i < n; i++) {
    s = ' ';
    for (j = 0; j < n; j++) {

        if (j == i || i + j == n - 1) {
            s = s + '*';
        } else {
            s = s + ' ';
        }

    }
    console.log(s);
    //console.log('\');
}*/

/*n = 5
var i;
var j;
var s;

if (n % 2 == 0) {
    console.log("pogresna vrednost");
}
for (i = 0; i < n; i++) {
    s = "";
    for (j = 0; j < n; j++) {
        if (i == (n - 1) / 2 || j == (n - 1) / 2) {
            s = s + "*";
        } else {
            s = s + " ";
        }
    }
    console.log(s);
}*/

/*var n = 5;
var m = 3;
var e = 7;
var i;
var j;
var q;
var s = "";
var g = "";
var t = "";
for (i = 0; i < n; i++) {
    s = s + '*';
} console.log(s);
for (j = 0; j < m; j++) {
    g = g + '*';
} console.log(g);
for (q = 0; q < e; q++) {
    t = t + '*';
} console.log(t);*/

/*var n = 5002;
x = n.toString();
console.log(x);
console.log(typeof x);
console.log(x.length);*/

//ili
/*var n = 346;
var n_string = "" + n;
console.log(n_string.length);
if (n_string.length === 3) {
    console.log("jeste");
}
else {
    console.log("nije");
}*/

//8 zadatak
/*var n = [5, 3, -1, -3, 5, 7, 5, 9, 5];
var m = 5;
var i;
var x = 0;
for (i = 0; i < n.length; i++) {
    if (n[i] == m) {
        x = x + 1;
    }
} console.log(x);*/

//9 zadatak
/*var n = [3, 5, 7, 2, -1, 4, 8, 9];
var i;
var s = 0;
for (i = 0; i < n.length; i++) {
    if (n[i] % 2= 1) {

    }
}

var c = ["bgdf", "saddf"];
console.log(c[0]);*/

// //da izdvojimo poslednju cifru broja 346
// var n = 346; //3*10^2 + 4*10^1 + 6
// //console.log(n%10);
// //oduzimanje poslednje cifre
// //console.log((n-n%10)/10);

// while (n != 0) {
//     last_digit = n % 10;
//     console.log(last_digit);
//     n = (n - last_digit) / 10;
// }

var a = "a";
var A = "A";
var ime = "Andrijaaaa";
var i;
var d = 0, c = 0;

for (i = 0; i < ime.length; i++) {
    if (ime[i] == a) {
        c++;
    }
}
console.log("Broj karaktera a je: " + c);

for (i = 0; i < ime.length; i++) {
    if (ime[i] == a || ime[i] == A) {
        d++;
    }
}
console.log("Broj karaktera A i a je: " + d);

var given_string = 'abc';
var given_number = 4;
var i;
var s = 0;
var result = "";
for (i = 0; i < given_number; i++) {
    result = result + given_string;
} console.log(result);