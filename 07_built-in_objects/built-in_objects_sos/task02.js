// Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’. 
// Input: “Programming in JS is super interesting!”
// Output: “Programming in ** is super interesting!”

function jsToStars(string) {
    var array = string.split('JS');
    var newString = array.join('**');
    return newString;
}

console.log(jsToStars('Programming in JS is super intereJSsting!'));
