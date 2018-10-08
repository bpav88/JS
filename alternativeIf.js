

/* 
var a = 9;
var divide = (a % 2 == 0) ? "even" : "odd";
console.log(divide); 
*/

/*
var b = 7;

var res = (b % 3 === 0) ? ((b % 5 === 0) ? "deljiv" : "nije deljiv") : "nije deljiv";

console.log(res); 
*/

/*
var a = 3, b = -9, c = -2;
var product = (a * b * c > 0) ? "The sign is +" : ((a * b * c == 0) ? "The sign is neutral" : "The sing is -");
console.log(product);
*/


/*
var a = 14;
var res = (typeof a === "number") ? ((a % 2 === 0) ? (a / 2) : "X") : "X";

console.log(res);

*/
/*

var a = 5, b = -2, c = -6, d = 0, e = 10;
var max1 = (a > b) ? a : b;
var max2 = (c > d) ? c : d;
var max3 = (max1 > e) ? max1 : e;
var max4 = (max3 > max2) ? max3 : max2;
console.log(max4);

*/

// var a = 3, b = 16, c = 12;
// var privremena;

// (a > b) ? (privremena = a, a = b, b = privremena) : "";
// (a > c) ? (privremena = a, a = c, c = privremena) : "";
// (c > b) ? (privremena = c, c = b, b = privremena) : "";
// console.log(a, c, b);
/*var max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
var min = (a < b) ? ((a < c) ? a : c) : ((b < c) ? b : c);
var mid = (a !== max) ? ((a !== min) ? a : b) : "";
console.log(min, mid, max);*/


var a = 8;
var niz = [3, 6, 12, 21, 9, 5, 19];
var i;
var ind;

for (i = 0, ind = false; ind == false && i < niz.length; i++) {
    if (niz[i] === a) {
        ind = true;
    }

}
if (ind == true) {
    console.log(i - 1);
} else {
    console.log("Element nije u nizu!");
}


var a = [-3, 11, 5, 3.4, -8];
var i;

for (i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        a[i] = a[i] * 2;
    }
}
console.log(a);

var niz = [4, -2, 2, 1, 6];
var min;
var i, y;

min = niz[0];

for (i = 0; i < niz.length; i++) {

    if (min > niz[i]) {
        min = niz[i];
        y = i;

    }

}
console.log(min, y);


var a = [4, 2, 2, -5, -5, -1, 6];
var min = a[0];
var min2 = a[0];
var i, y = 0;

for (i = 0; i < a.length; i++) {

    if (min > a[i]) {
        min = a[i];
        y = i;
    }

}

console.log(min);

for (i = 0; i < a.length; i++) {

    if ((a[i] != min) && (min2 > a[i])) {
        min2 = a[i];
    }

}

console.log(min2);


var a = [3, 11, -5, -3, 2];
var i;
var sum = 0;

for (i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        sum = sum + a[i];
    }
}

console.log(sum);

var a = [2, 4, -2, 7, -2, 4, 2];
var i;
var pr = false;
var provera = 0;

for (i = 0; (provera == 0) && (i < a.length); i++) {
    if (a[i] == a[a.length - (i + 1)]) {
        //console.log("Simetrican je!");
        pr = true;
    } else {
        pr = false;
        provera = 1;

    }
}
if (pr == true) {
    console.log("Simetrican je!");
} else {
    console.log("Nije simetrican!");
}

a = 13 / 2;
console.log(Math.round(a));

var a = [2, 4, -2, 7, -2, 4, 2];
var i;
var pr = true;

for (i = 0; (pr == true) && (i < a.length); i++) {
    if (!(a[i] == a[a.length - (i + 1)])) {
        pr = false;
    }

}
if (pr == true) {
    console.log("Simetrican");
} else {
    console.log("Nije simetrican");
}