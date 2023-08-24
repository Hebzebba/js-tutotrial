## JavaScript Const

The const keyword was introduced in ES6 (2015)

Variables defined with const cannot be Redeclared

Variables defined with const cannot be Reassigned

Variables defined with const have Block Scope

## Cannot be Reassigned
A const variable cannot be reassigned:

Example
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error

## Must be Assigned
JavaScript const variables must be assigned a value when they are declared:

Correct
const PI = 3.14159265359;

Incorrect
const PI;
PI = 3.14159265359;

## Constant Arrays
You can change the elements of a constant array:

Example
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");