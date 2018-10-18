(function() {
  console.log("Hello from LIFE!");
})();

function outer() {
  function inner() {
    console.log("Inner");
  }
  inner();
  console.log("Outer");
}
outer();

function outer() {
  var decoration = "~*~";
  var inner = function(name) {
    console.log(decoration, "inner: hallo", name);
  };
  return inner;
}

// outer("petar");

var result;
result = outer();
result("student");
