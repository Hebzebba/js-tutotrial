## JavaScript String Methods
String length
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String charAt()
String charCodeAt()
String split()


## JavaScript String Length

The length property returns the length of a string:

Example
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;


## Extracting String Parts
There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)
JavaScript String slice()
slice() extracts a part of a string and returns the extracted part in a new string.

The method takes 2 parameters: start position, and end position (end not included).

## Example
Slice out a portion of a string from position 7 to position 13:

let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
Note
JavaScript counts positions from zero.

First position is 0.

Second position is 1.

## Examples
If you omit the second parameter, the method will slice out the rest of the string:

let text = "Apple, Banana, Kiwi";
let part = text.slice(7);
If a parameter is negative, the position is counted from the end of the string:

let text = "Apple, Banana, Kiwi";
let part = text.slice(-12);
This example slices out a portion of a string from position -12 to position -6:

let text = "Apple, Banana, Kiwi";
let part = text.slice(-12, -6);


## JavaScript String substring()
substring() is similar to slice().

The difference is that start and end values less than 0 are treated as 0 in substring().

## Example
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);
If you omit the second parameter, substring() will slice out the rest of the string.

## JavaScript String substr()
substr() is similar to slice().

The difference is that the second parameter specifies the length of the extracted part.

## Example
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6);
If you omit the second parameter, substr() will slice out the rest of the string.

## Example
let str = "Apple, Banana, Kiwi";
let part = str.substr(7);
If the first parameter is negative, the position counts from the end of the string.

## Example
let str = "Apple, Banana, Kiwi";
let part = str.substr(-4);
Replacing String Content
The replace() method replaces a specified value with another value in a string:

## Example
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
Note
The replace() method does not change the string it is called on.

The replace() method returns a new string.

The replace() method replaces only the first match

If you want to replace all matches, use a regular expression with the /g flag set. See examples below.

By default, the replace() method replaces only the first match:

## Example
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:

## Example
let text = "Please visit Microsoft!";
let newText = text.replace("MICROSOFT", "W3Schools");

To replace case insensitive, use a regular expression with an /i flag (insensitive):

## Example
let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "W3Schools");

## Note
Regular expressions are written without quotes.

To replace all matches, use a regular expression with a /g flag (global match):

## Example
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "W3Schools");

Note
You will learn a lot more about regular expressions in the chapter JavaScript Regular Expressions.

JavaScript String ReplaceAll()
In 2021, JavaScript introduced the string method replaceAll():

## Example
text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");
The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.

If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.

## Example
text = text.replaceAll(/Cats/g,"Dogs");
text = text.replaceAll(/cats/g,"dogs");
## Note
replaceAll() is an ES2021 feature.
replaceAll() does not work in Internet Explorer.

Converting to Upper and Lower Case
A string is converted to upper case with toUpperCase():

A string is converted to lower case with toLowerCase():

JavaScript String toUpperCase()
## Example
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
JavaScript String toLowerCase()
## Example
let text1 = "Hello World!";       // String
let text2 = text1.toLowerCase();  // text2 is text1 converted to lower
JavaScript String concat()
concat() joins two or more strings:

## Example
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
The concat() method can be used instead of the plus operator. These two lines do the same:

## Example
text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");
Note
All string methods return a new string. They don't modify the original string.

Formally said:

Strings are immutable: Strings cannot be changed, only replaced.

JavaScript String trim()
The trim() method removes whitespace from both sides of a string:

## Example
let text1 = "      Hello World!      ";
let text2 = text1.trim();
JavaScript String trimStart()
ECMAScript 2019 added the String method trimStart() to JavaScript.

The trimStart() method works like trim(), but removes whitespace only from the start of a string.

Example
let text1 = "     Hello World!     ";
let text2 = text1.trimStart();