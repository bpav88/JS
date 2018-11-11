function checkArray(array, index) {
    try {
        if (index < 0 || index > array.length) {
            var rangeError = new RangeError("index is out of array");
            throw rangeError;
        }
        if (typeof index != "number") {
            var typeError = new TypeError("index is not a number");
            throw typeError;
        }

    } catch (error) {
        if (error instanceof RangeError) {
            console.log("Range Error: ", error.message);
        } else {
            console.log("Type Error: ", error.message);
        }
    } finally {
        console.log("Well done!");
    }
}
checkArray([3, 8, 11, 24, 6], 2);
