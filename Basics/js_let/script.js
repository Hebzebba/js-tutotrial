let x = 1; // global scope
// hoisting

function myFunc() {
  let y = 2;
  let x = 3; // function/local scope
  var z = 5;
  console.log(y);
  console.log(x);
}
console.log(z);
console.log(y);
myFunc();
