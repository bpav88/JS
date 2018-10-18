// Write IIFE that replaces the first and the last element of the given
// array and prints out its elements.
// 	Input array: [4, 5, 11, 9]
// 	Output array: [ 9, 5, 11, 4]

(function(array) {
  var tmp;

  tmp = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = tmp;

  console.log(array);
})([4, 5, 11, 9]);

//2 Write IIFE that calculates the surface area of the given rectangle with sides a and b.
// Input: 4 5
// Output: 20

(function(stranicaA, stranicaB) {
  var povrsina;
  povrsina = stranicaA * stranicaB;
  console.log(povrsina);
})(4, 5);

//3 Write IIFE that replaces all appearances of the letters m or M with *
// and returns the number of replacements.
// 	Input: prograMming
// 	Output: progra**ing, 2

var result = (function(string) {
  var i;
  var starsCounter = 0;
  var newString = "";

  for (i = 0; i < string.length; i++) {
    if (string[i] == "m" || string[i] == "M") {
      starsCounter++;
      newString = newString + "*";
    } else {
      newString = newString + string[i];
    }
  }
  return newString + ", " + starsCounter;
})("Programming Must be imtrasting!");

console.log(result);

// 4
// Write a function with parameters name and surname that returns a function that
// suggests an email in the form name.surname@gmail.com.
// Input: pera peric
// 	Output: pera.peric@gmail.com

(function(name, surname) {
  var email = "";
  email = name + "." + surname + "@gmail.com";
  console.log(email);
})("pera", "peric");

// 5 Write a function that returns a function that calculates a decimal value of
//  the given octal number.
// Input: 034
// Output: 28

function octalToDecimal() {
  var radix = 8;
  var decimal = function(octalNum) {
    console.log(parseInt(octalNum, radix));
  };
  return decimal;
}

// octalToDecimal("034"); TODO NE RADI!!!

var result = octalToDecimal();
result("034");
// ----------------------------------------------------
function octalToDecimal(octalNum) {
  var radix = 8;
  console.log(parseInt(octalNum, radix));
}

octalToDecimal("034");
/////////////////////////////////////////////////////////////////////////////////

//6
// Write a function that checks if a given string is valid password.
//  The password is valid if it is at least 6 characters long and contains at least one digit.
//   The function should receive two callbacks named successCallback and errorCallback that
//   should be called in case password is correct or invalid.
// Input: JSGuru
// Output: Your password is invalid!

// 	Input: JSGuru123
// 	Output: Your password is cool!

function isValid(password, confirmation) {
  for (var i = 0; i < password.length; i++) {
    if (password.length >= 6 && typeof password[i] == "number") {
      confirmation = successCallback();
    } else {
      confirmation = errorCallback();
    }
  }

  return confirmation;
}
function successCallback(password) {
  console.log(password + " is legit");
}

function errorCallback(password) {
  console.log(password + " is not good!");
}
var result = isValid("mirkoo1");

///////////////////////////////////////////

function odd(a) {
  if (a % 2 == 0) {
    return false;
  } else {
    return true;
  }
}

function even(a) {
  if (a % 2 != 0) {
    return false;
  } else {
    return true;
  }
}

function newArrayGen(array, oddCallBack) {
  var newArray = [];
  var counter = 0;

  for (var i = 0; i < array.length; i++) {
    if (oddCallBack(array[i]) == true) {
      newArray[counter] = array[i];
      counter++;
    }
  }
  return newArray;
}

var result = newArrayGen([2, 8, 11, 4, 9, 3], odd);
console.log(result);
