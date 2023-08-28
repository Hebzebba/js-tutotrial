## JavaScript Strings

JavaScript strings are for storing and manipulating text.
A JavaScript string is zero or more characters written inside quotes.

## Example
let text = "John Doe";

You can use single or double quotes:
## Example
let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes

## Escape Character
Because strings must be written within quotes, JavaScript will misunderstand this string:

let text = "We are the so-called "Vikings" from the north.";
The string will be chopped to "We are the so-called ".

The solution to avoid this problem, is to use the backslash escape character.

The backslash (\) escape character turns special characters into string characters:

Code	Result	Description
\'	'	Single quote
\"	"	Double quote
\\	\	Backslash


## Six other escape sequences are valid in JavaScript:

Code	Result
\b	Backspace
\f	Form Feed
\n	New Line
\r	Carriage Return
\t	Horizontal Tabulator
\v	Vertical Tabulator



## JavaScript Strings as Objects
Normally, JavaScript strings are primitive values, created from literals:

let x = "John";
But strings can also be defined as objects with the keyword new:

let y = new String("John");
Example
let x = "John";
let y = new String("John");
Do not create Strings objects.

The new keyword complicates the code and slows down execution speed.

String objects can produce unexpected results:

When using the == operator, x and y are equal:

let x = "John";
let y = new String("John");
When using the === operator, x and y are not equal:

let x = "John";
let y = new String("John");
Note the difference between (x==y) and (x===y).

(x == y) true or false?

let x = new String("John");
let y = new String("John");
(x === y) true or false?

let x = new String("John");
let y = new String("John");
Comparing two JavaScript objects always returns false.