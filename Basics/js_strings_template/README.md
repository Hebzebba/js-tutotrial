## JavaScript Template Literals

Synonyms:
Template Literals
Template Strings
String Templates
Back-Tics Syntax


## Back-Tics Syntax
Template Literals use back-ticks (``) rather than the quotes ("") to define a string:

## Example
let text = `Hello World!`;


## Quotes Inside Strings
With template literals, you can use both single and double quotes inside a string:

## Example
let text = `He's often called "Johnny"`;

Multiline Strings
Template literals allows multiline strings:

## Example
let text =
`The quick
brown fox
jumps over
the lazy dog`;

Interpolation
Template literals provide an easy way to interpolate variables and expressions into strings.

The method is called string interpolation.

The syntax is:

\${...}

Variable Substitutions
Template literals allow variables in strings:

## Example
let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;

Automatic replacing of variables with real values is called string interpolation.

Expression Substitution
Template literals allow expressions in strings:

## Example
let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;