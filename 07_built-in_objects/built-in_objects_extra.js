
// 1. Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]


function doubleArray(array) {
    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        newArray.push(array[i], array[i]);
        //newArray.push(array[i]);
    }
    return newArray;
}

var result = doubleArray([1, 2, 3]);
console.log(result);


// Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13] 

function removeDuplicate(array) {
    var newArray = [];
    var j = 0;

    for (var i = 0; i < array.length; i++) {
        if (newArray.indexOf(array[i]) == -1) {
            newArray[j] = array[i];
            j++;

            // newArray.push(array[i]);
        }
    }

    return newArray.sort(function (a, b) {
        return a - b;
    });
}

var result = removeDuplicate([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]);
console.log(result);


// 3. a. Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true

function isOddArray(array) {
    if (array.length % 2 != 0) {
        return true;
    }

    return false;
}

console.log(isOddArray([1, 2, 9, 2, 1, 4]));


// b. Write a function that counts the number of elements less than the middle element.
// If the given array has an even number of elements, print out an error message.

function elemenstLessThanMiddle(array) {
    var counter = 0;

    if (isOddArray(array)) {
        var middleElement = array[Math.floor(array.length / 2)];
        for (var i = 0; i < array.length; i++) {
            if (array[i] < middleElement) {
                counter++;
            }
        }

        return counter;

    } else {
        return "Error!";
    }
}

console.log(elemenstLessThanMiddle([-1, 8.1, 3, 6, 2.3, 44, 2.11, -3, 6]));



// 4. Write a function that finds the smallest element of a given array.
// The function should return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output:  { minValue: -2, minLastIndex: 6 }

function minValue(array) {

    var newArr = [].concat(array);
    newArr.sort(function (a, b) {
        return a - b;
    })

    var minValue = newArr[0];
    var minLastIndex = array.lastIndexOf(minValue);

    var o = {
        minValue: minValue,
        minLastIndex: minLastIndex
    }

    return o;

}

console.log(minValue([1, 4, -2, 11, 8, 1, -2, 3]));


// 5. a. Write a function that finds all the elements in a given array less than a given element. 
// 	Input: [2, 3, 8, -2, 11, 4], 6 
// 	Output: [2, 3, -2, 4]

function elementsLessThanGiven(array, number) {
    var newArray = [];
    var index = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i] < number) {
            newArray[index] = array[i];
            index++;
            // newArray.push(array(i))
        }
    }
    return newArray;
}

//console.log(elementsLessThanGiven([2, 3, 8, -2, 11, 4], 6));

// 5. b. Write a function that finds all the elements in a given array that start with the “pro” substring. 
// The function should be case insensitive. 
// 		Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
// 	Output: [’Programming’, ‘product’]

function elementsSubstring(array, substring) {
    var newArray = [];
    var index = 0;

    for (var i = 0; i < array.length; i++) {
        if (array[i].toLowerCase().indexOf(substring) == 0) {
            newArray[index] = array[i];
            index++;

            // newArray.push(array[i]);
        }
    }
    return newArray;
}

//console.log(elementsSubstring(["JavaScript", "Programming", "fun", "product", "gopro"]), "pro");

// 5. c. Write a function that expects an array and a callback function that filters out some of the elements. 
// Use functions defined in a) or b) to test it. 


var filterArray = function (array, filter, filterElement) {
    return filter(array, filterElement);
}

console.log(filterArray(["JavaScript", "Programming", "fun", "japrogramer"], elementsSubstring, "ja"));

// 6. a. Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product.
// For example,
// 	[
// {name: ‘apples’, price: 100}, 
// {name: ‘milk’, price: 80}, 
// {name:’bananas’, price: 150}
// ]


var products = [
    { name: 'apples', price: 100.7 },
    { name: 'milk', price: 80 },
    { name: 'bananas', price: 150.456 },
    { name: 'bread', price: 200.56 }
];

// b. Write a function that calculates the total price of your shopping list. 

function totalPrice(list) {
    var sum = 0;
    for (var i = 0; i < list.length; i++) {
        sum += list[i].price;
    }

    return sum.toFixed(3);
}

console.log(totalPrice(products));

// c. Write a function that calculates the average product price of your shopping list.
// Print this value with the precision of three decimals. 

function avgPrice(list) {
    return (totalPrice(list) / list.length).toFixed(3);
}

console.log(avgPrice(products));


// d. Write a function that prints out the name of the most expensive product on your shopping list.
// Write the name in uppercase. 

var products = [
    { name: 'apples', price: 100.7 },
    { name: 'milk', price: 80 },
    { name: 'bananas', price: 150.456 },
    { name: 'bread', price: 200.56 }
];


//TODO: sort nad objektima
function mostExpensive(list) {
    var arrayOfPrices = [];

    for (var i = 0; i < list.length; i++) {
        arrayOfPrices[i] = list[i].price;
    }

    var maxPrice = Math.max(...arrayOfPrices);
    var indexOfMax = arrayOfPrices.indexOf(maxPrice);

    return list[indexOfMax].name.toUpperCase();
}

console.log(mostExpensive(products));


// 7. a. Write a function that checks if a given string is written in all capitals.

function isAllUpperCase(string) {
    if (string == string.toUpperCase()) {
        return string;
    } else {
        return "error";
    }

}

// b. Write a function that checks if a given string contains any digits.

function hasDigit(string) {

    var newArr = string.split('');

    for (var i = 0; i < string.length; i++) {
        if (!isNaN(parseInt(newArr[i]))) {
            return string;
        }
    }
    return "error";

}


// c. Write a function that checks if a given string is a valid hexadecimal color.

function isColor(string) {
    if (string.length == 6) {
        var tmp = parseInt(string, 16).toString(16); // :)
        if (tmp === string) {
            return string;
        } else {
            console.log("error");

        }
    } else {
        return "error";

    }
}

// d. Write a function that checks if a given number belongs to the interval from 1900 to 2018. 

function intervalCheck(number) {
    if (number >= 1900 && number <= 2018) {
        return number;
    } else {
        return "error";

    }
}

// e. Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).

function Validator(string, password, color, number) {
    this.string = isAllUpperCase(string);
    this.password = hasDigit(password);
    this.color = isColor(color);
    this.number = intervalCheck(number);
}

var validator = new Validator("BOGDAN", "bodf", "bbb222", 1988);

console.log(validator);


// Write a function that calculates a number of days to your birthday.
// Input: 25 February 
// Output: 5 days

function daysToBirthday(date) {
    var today = new Date();
    var birthday = new Date(date);
    var result;
    var miliInDay = 864e5;
    var dayInYear = 365;

    //TODO: 
    if (today > birthday) {
        result = Math.round(((birthday - today) / miliInDay) + dayInYear);
        return "Preostalo je: " + result + " dana."
    } else {
        result = Math.round((birthday - today) / miliInDay);
        return "Preostalo je: " + result + " dana."
    }
}

console.log(daysToBirthday("2018, 10, 29"));

// Write a function that for a given departure and arrival time calculates the time the trip takes.
// 	Input: 8:22:13 11:43:22
// 	Output: 3 hours 21 minutes 9 seconds

function calculateTime(departure, arrival) {

    var year = new Date().getFullYear();
    var newDeparture = new Date(year + " " + departure);
    var newArrival = new Date(year + " " + arrival);
    var miliInHours = 36e5;
    var miliInMin = 6e4;
    var miliInSec = 1000;



    var result = (newArrival - newDeparture);

    //TODO:
    var hours = Math.floor(result / miliInHours);
    var minutes = Math.floor((result % miliInHours) / miliInMin);
    var seconds = Math.floor(((result % miliInHours) % miliInMin) / miliInSec);
    return hours + " Hours " + minutes + " minutes " + seconds + " seconds";
}
console.log(calculateTime("8:22:13", "11:43:22")); //3 21 9



// Write a constructor function that creates points in space. Each point in space has its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.
// B) Write a function that calculates the distance between two points in the space. 

function Point(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

function distance(point1, point2) {
    var dist = Math.sqrt(Math.pow((point1.x - point2.x), 2) + Math.pow((point1.y - point2.y), 2) + Math.pow((point1.z - point2.z), 2));
    return dist;
}
var point1 = new Point(3, 5, 1);
var point2 = new Point(4, 6, 3);

console.log(distance(point1, point2));

// 11. a. Write a function that generates a random integer value between 5 and 20.

function random5To20() {
    return Math.floor(Math.random() * (20 - 5)) + 5;
}
function random50To100() {
    return Math.floor(Math.random() * (100 - 50)) + 50;
}
function rand(number, random) {
    var array = [];
    for (var i = 0; i < number; i++) {
        array[i] = random();
    }
    return array;
}
console.log(rand(5, random50To100));

// Write a function that shuffles the elements of a given array. 
// 		Input: [3, 6, 11, 2, 9, 1]
// 		Output: [6, 2, 9, 1, 3, 11]  (it can be any random permutation of the given array)


function randomPosition(array) {
    var newArray = [];
    var indexArray = [];

    for (var i = 0; i < array.length;) {
        index = Math.floor(Math.random() * array.length);

        if (indexArray.indexOf(index) == -1) {
            indexArray.push(index);
            newArray.push(array[index]);
            i++;
        }
    }
    return newArray;
}
console.log(randomPosition([3, 6, 11, 2, 9, 1]));