## JavaScript Arrays

An array is a special variable, which can hold more than one value:
const cars = ["Saab", "Volvo", "BMW"];


## Creating an Array
Using an array literal is the easiest way to create a JavaScript Array.

Syntax:

const array_name = [item1, item2, ...]; 


## Using the JavaScript Keyword new
The following example also creates an Array, and assigns values to it:

## Example
const cars = new Array("Saab", "Volvo", "BMW");


## Accessing Array Elements
You access an array element by referring to the index number:
const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];

## Changing an Array Element
This statement changes the value of the first element in cars:
## Example
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Opel";


## Looping Array Elements
One way to loop through an array, is using a for loop:

## Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

```
let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

```

## You can also use the Array.forEach() function:

## Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
```
let text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}
```

## Adding Array Elements
The easiest way to add a new element to an array is using the push() method:

Example
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");  // Adds a new element (Lemon) to fruits


## JavaScript Array Methods

Array length
Array toString()
Array pop()
Array push()
Array shift()
Array unshift()
Array join()
Array delete()
Array concat()
Array flat()
Array splice()
Array slice()