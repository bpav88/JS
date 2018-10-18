function squareArray(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    newArray[i] = array[i] * array[i];
  }
  return newArray;
}

var a = [1, 2, 3, 4, 5];
console.log(squareArray(a));

function doubleArray(array) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    newArray[i] = array[i] * 2;
  }
  return newArray;
}

var a = [1, 2, 3, 4, 5];
console.log(doubleArray(a));

//

function transformArray(array, transformation) {
    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        newArray[i] = transformation(array[i]);
    }
    return newArray;
}

function square(n) {
    return n * n;
}

function double(n) {
    return n * 2;
}

var result = transformArray([1, 2, 3, 4, 5], square);
console.log(result);
