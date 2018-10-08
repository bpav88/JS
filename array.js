// var month = ["January", "February", "March", "May", "Jun", "July", "August", "September", " October", "November", " December"];
// console.log(month[4]);
// console.log(month[9]);
// console.log(month[0]);


// var daysInWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// console.log(daysInWeek[(daysInWeek.length - 1)]);

// var array = [[1, 2, 1, 24, [9, 1, 12]], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// console.log(array[0][4][0]);


// console.log(array[2]);
// console.log(array[1][2]);
// console.log(array[0][0][])

// var array = [2, -4, 5, -2, -11];



// for (var i = 0; i < array.length; i++) {

//     if (array[i] < 0) {
//         console.log(array[i]);
//     }

// }


// var array1 = [5, 15, -5, 20, 12, 18, 72, 14, 9];


// for (var i = 0; i < array1.length; i++) {
//     if (array1[i] % 3 === 0) {
//         console.log(array1[i]);
//     }
// }

// for (var i = 0; i <= 15; i++) {
//     if (i % 2 == 0) {
//         console.log(i + " je paran broj. ");
//     }
//     else {
//         console.log(i + " je neparan broj ");
//     }
// }


// for (var i = 0; i < 1000; i++) {
//     if (i % (3 * 5) == 0) {
//         console.log(i);
//     }
// }

// for (var i = 0; i < 1000; i++) {
//     var j = 0
//     if (j < 1000) {
//         j = i * 3 * 5
//         console.log(j);
//     }
// }


// k* 3 * 5
// 3*5 = 15, 30, 45, 60, 75, 90,  


// var j = i * (3 * 5)
// console.log(j)


var a = [3, 7, 21, 8];
var sum = 0;
var pro = 1;

for (var i = 0; i < a.length; i = i + 1) {
    sum += a[i];
    pro *= a[i];
}
console.log("Zbir niza je:" + sum + ", a proizvod niza je:" + pro)