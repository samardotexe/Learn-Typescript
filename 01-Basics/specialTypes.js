"use strict";
//special types of datasets
//1.any
//Can hold any type of value. Avoid using it unless necessary.
let randomValue = 42;
randomValue = "Hello";
//2.unknown
//Safer than any, as you must explicitly check the type before using it.
let uncertain = "Hello";
// console.log(uncertain.toUpperCase()); // Error: Object is of type 'unknown'
if (typeof uncertain === "string") {
    //console.log(uncertain.toUpperCase()); // Output: HELLO
}
//3.Void
//Represents the absence of a return value, often used for functions.
function logMessage(message) {
    console.log(message);
}
logMessage("This is a log message.");
//4.never
//Represents a value that will never occur, typically used for functions that throw errors or have infinite loops.
function throwError(message) {
    throw new Error(message);
}
