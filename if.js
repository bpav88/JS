var a = 7;


if (a % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
};


var b = 30;

if (b % 3 === 0 && b % 5 === 0) {
    console.log(b);
} else {
    console.log("Nije deljiv");
}


var c = 3;
var d = 2;
var e = -7;

if (c * d * e < 0) {
    console.log("The sing is -");
} else {
    console.log("The sing is +");
}


var f = 10;

if (typeof f === "number") {
    if (f % 2 === 0) {
        console.log(f / 2);
    } else {
        console.log("X");
    }
} else {
    console.log("NaN");
}

var a1 = -5, b1 = -2, c1 = 6, d1 = 0, e1 = -1;

if (a1 > b1 && a1 > c1 && a1 > d1 && a1 > e1) {
    console.log(a1)
} else if (b1 > c1 && b1 > d1 && b1 > e1) {
    console.log(b1)
} else if (c1 > d1 && c1 > e1) {
    console.log(c1)
} else if (d1 > e1) {
    console.log(d1)
} else {
    console.log(e1)
}

var x = 11, y = 12, z = 12;

if (x > y && x > z) {
    if (y > z) {
        console.log(x, y, z);
    } else {
        console.log(x, z, y);
    }
} else if (y > z) {
    if (z > x) {
        console.log(y, z, x);
    } else {
        console.log(y, x, z);
    }
} else {
    if (x > y) {
        console.log(z, x, y);
    }
    else {
        console.log(z, y, x);
    }
}