
global = 123;

function newGlobal(value) {
    global = value;
}

console.log(global);
newGlobal(100);
console.log(global);
