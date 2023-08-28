
## The For Loop
The for statement creates a loop with 3 optional expressions:

for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
Expression 1 is executed (one time) before the execution of the code block.

Expression 2 defines the condition for executing the code block.

Expression 3 is executed (every time) after the code block has been executed.

## Expression 1
Normally you will use expression 1 to initialize the variable used in the loop (let i = 0).
This is not always the case. JavaScript doesn't care. Expression 1 is optional.


And you can omit expression 1 (like when your values are set before the loop starts):

```
Example
let i = 2;
let len = cars.length;
let text = "";
for (; i < len; i++) {
  text += cars[i] + "<br>";
}
```

## Expression 2
Often expression 2 is used to evaluate the condition of the initial variable.

This is not always the case. JavaScript doesn't care. Expression 2 is also optional.

If expression 2 returns true, the loop will start over again. If it returns false, the loop will end.

If you omit expression 2, you must provide a break inside the loop. Otherwise the loop will never end.
This will crash your browser. Read about breaks in a later chapter of this tutorial.

## Expression 3
Often expression 3 increments the value of the initial variable.
This is not always the case. JavaScript doesn't care. Expression 3 is optional.
Expression 3 can do anything like negative increment (i--), positive increment (i = i + 15), or anything else.
Expression 3 can also be omitted (like when you increment your values inside the loop):


## JavaScript For In

The For In Loop
The JavaScript for in statement loops through the properties of an Object:

Syntax
for (key in object) {
  // code block to be executed
}
Example
const person = {fname:"John", lname:"Doe", age:25};

```
let text = "";
for (let x in person) {
  text += person[x];
}
```

## For In Over Arrays
The JavaScript for in statement can also loop over the properties of an Array:

Syntax
for (variable in array) {
  code
}
Example
const numbers = [45, 4, 9, 16, 25];

```
let txt = "";
for (let x in numbers) {
  txt += numbers[x];
}
```

## The For Of Loop
The JavaScript for of statement loops through the values of an iterable object.

It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

Syntax
for (variable of iterable) {
  // code block to be executed
}
variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.

iterable - An object that has iterable properties.


## Looping over an Array
Example
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}

## The While Loop
The while loop loops through a block of code as long as a specified condition is true.

Syntax
while (condition) {
  // code block to be executed
}
Example
In the following example, the code in the loop will run, over and over again, as long as a variable (i) is less than 10:

Example
while (i < 10) {
  text += "The number is " + i;
  i++;
}

## The Do While Loop
The do while loop is a variant of the while loop. This loop will execute the code block once, 
before checking if the condition is true, then it will repeat the loop as long as the condition is true.

Syntax
do {
  // code block to be executed
}
while (condition);
Example
The example below uses a do while loop. The loop will always be executed at least once, 
even if the condition is false, because the code block is executed before the condition is tested:

Example
do {
  text += "The number is " + i;
  i++;
}
while (i < 10);