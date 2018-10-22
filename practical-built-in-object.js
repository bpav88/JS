// Write a function to convert a number from one base (radix) to another. 
// Hint: Use one of the built-in functions and toString method of one of the built-in Object Wrappers;
// 'ff', 16, 8 -> 377

function convertNumber(number, radix, radix2) {
    var tmp = parseInt(number, radix);
    return tmp.toString(radix2);
}

console.log(convertNumber("ff", 16, 8));


// Write a JavaScript function that reverses a number. typeof result of the function should be “number”.
// 	12345 -> 54321


function reversesNumber(number) {
    var strNumber = String(number);
    var reversNum = strNumber.split('').reverse().join('');
    return parseFloat(reversNum);
}

console.log(reversesNumber(12345));




// Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Note: Assume punctuation, numbers and symbols are not included in the passed string.
// “Webmaster” -> “abeemrstw”

function sortAlphabetical(string) {
    return string.toLowerCase().split("").sort().join("");
}
console.log(sortAlphabetical("Webmaster"));



// Write a function to alphabetize words of a given string. Alphabetizing a string means rearranging the letters so they are sorted from A to Z.
// 	"Republic Of Serbia" -> "Rbceilpu Of Sabeir"

function alphabetizeWords(string) {
    var stringArray = string.split(' ');
    var newStringArray = [];

    for (var i = 0; i < stringArray.length; i++) {
        var element = stringArray[i];
        newStringArray.push(element.split('').sort().join(''));
    }
    return newStringArray.join(' ');
}

console.log(alphabetizeWords("Republic Of Serbia"));



// Write a function to split a string and convert it into an array of words.
// 	"John Snow" -> [ 'John', 'Snow' ]

function arrayOfStrings(string) {

    return string.split(" ");
}
console.log(arrayOfStrings("John Snow"));


// Write a function to convert a string to its abbreviated form. 
// 	"John Snow" -> 	"John S."

function convertStringToAbbreviatedForm(string) {

    var splitString = string.split(" ");
    var lastElement = splitString.pop().split('');
    return splitString.shift() + ' ' + lastElement.shift() + '.';

}
console.log(convertStringToAbbreviatedForm("John Snow"));




// Write a function that can pad (left, right) a string to get to a determined length.
// 	'0000', 123, 'l' -> 0123 
// '00000000', 123, 'r' -> 12300000

function padString(string, number, side) {
    var strArray = string.split("");
    var numArray = String(number).split("");
    var newArray = [];

    if (side === "l") {
        newArray = strArray.concat(numArray);
    } else if (side === "r") {
        newArray = numArray.concat(strArray);
    }

    for (var i = 0; i < numArray.length; i++) {
        if (side === "l") {
            newArray.shift();
        } else if (side === "r") {
            newArray.pop();
        }
    }
    return newArray.join("");

}
console.log(padString("00000000", 123, "r"));



// Write a function to capitalize the first letter of a string and returns modified string.
// "js string exercises" -> "Js string exercises"

function capitalizeFirstLetter(string) {

    var array = string.split("");
    array[0] = array[0].toUpperCase();
    return array.join("");

}

console.log(capitalizeFirstLetter("js string exercises"));


// Write a function to hide email addresses to protect them from unauthorized users.
// 	"somerandomaddress@example.com" -> "somerand...@example.com"

function hideEmail(string) {
    var firstPart = string.slice(0, 5);
    var secondPart = string.split("@");
    return firstPart + "...@" + secondPart[1];
}
console.log(hideEmail("somerandomaddress@example.com"));

// Write a program that accepts a string as input and swaps the case of each character. For example, if you input 'The Quick Brown Fox', the output should be 'tHE qUICK bROWN fOX'.
//        var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//        var LOWER = 'abcdefghijklmnopqrstuvwxyz';
// "The Quick Brown Fox" -> "tHE qUICK bROWN fOX"

function swapsCaseOfCharacter(string) {

    var array = string.split('');

    for (var i = 0; i < array.length; i++) {
        var element = array[i];

        if (element === element.toUpperCase()) {
            array[i] = element.toLowerCase();
        } else {
            array[i] = element.toUpperCase();
        }

    }

    return array.join('');
}

console.log(swapsCaseOfCharacter("The Quick Brown Fox"));
