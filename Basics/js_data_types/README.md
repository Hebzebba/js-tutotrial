## JavaScript Data Types

### JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

## The Object Datatype
The object data type can contain:

1. An object
2. An array
3. A date

 A date

### Examples
// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

## Note
A JavaScript variable can hold any type of data.


## The Concept of Data Types
In programming, data types is an important concept.

To be able to operate on variables, it is important to know something about the type.

Without data types, a computer cannot safely solve this:

let x = 16 + "Volvo";
Does it make any sense to add "Volvo" to sixteen? Will it produce an error or will it produce a result?

JavaScript will treat the example above as:

let x = "16" + "Volvo";
Note
When adding a number and a string, JavaScript will treat the number as a string.

## Example
let x = 16 + "Volvo";
Example
let x = "Volvo" + 16;
JavaScript evaluates expressions from left to right. Different sequences can produce different results:

JavaScript:
let x = 16 + 4 + "Volvo";
Result:

20Volvo
JavaScript:
let x = "Volvo" + 16 + 4;
Result:

Volvo164

## JavaScript Types are Dynamic
JavaScript has dynamic types. This means that the same variable can be used to hold different data types:

Example
let x;       // Now x is undefined
x = 5;       // Now x is a Number
x = "John";  // Now x is a String