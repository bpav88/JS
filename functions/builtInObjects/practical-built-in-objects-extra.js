
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
    if (string == string.toUpperCase())
        return true;

    return false;
}

console.log(isAllUpperCase('HAHA'));

// b. Write a function that checks if a given string contains any digits.

function hasDigit(string) {

    var newArr = string.split('');

    for (var i = 0; i < string.length; i++)
        if (parseInt(newArr[i]))
}