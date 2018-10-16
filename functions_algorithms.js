"use strict";

function findMinAndMax(array) {
  var minValue = array[0];
  var maxValue = array[0];
  var i;
  var currentElement;

  for (i = 1; i < array.length; i++) {
    currentElement = array[i];
    if (currentElement < minValue) {
      minValue = currentElement;
    }
    if (currentElement > maxValue) {
      maxValue = currentElement;
    }
  }
  var result = [];
  result[0] = minValue;
  result[1] = maxValue;
  return [minValue, maxValue];
}
var a = [3, 7, 2, 1, 8, 3];
var minMaxValues = findMinAndMax(a);
console.log("MIN: " + minMaxValues[0] + " MAX: " + minMaxValues[1]);

// 1)

function push(array, number) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    newArray[i] = array[i];
  }
  newArray[i] = number;
  return newArray;
}

var array;
array = push([1, 5, 6, 8], 10);
console.log(array);

// 2)

function pushInPlace(array, number) {
  array[array.length] = number;
}

var array = [1, 5, 6, 8];
pushInPlace(array, 10);
console.log(array);

// broj na pocetak niza
// 1)

function shift(array, number) {
  var newArray = [];
  newArray[0] = number;

  for (var i = 0; i < array.length; i++) {
    newArray[i + 1] = array[i];
  }
  return newArray;
}

var array;
array = shift([1, 5, 6, 8], 10);
console.log(array);

// broj na pocetak niza
// 2)

function shiftInPlace(array, number) {
  for (var i = array.length - 1; i >= 0; i--) {
    array[i + 1] = array[i];
  }
  array[0] = number;
}

var array = [1, 5, 6, 8];
shiftInPlace(array, 10);
console.log(array);
