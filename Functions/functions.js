"use strict";
//function : a block of code which only runs when it is called function
//function is a reusable block of code
//function is a set of statements that performs a task or calculates a value
function add(num1, num2) {
    return num1 + num2;
}
//optional parameter
function multiply(num1, num2) {
    return num1 * num2;
}
//default parameter
function substract(num1, num2 = 10) {
    return num1 - num2;
}
//rest parameter
//... rest/spread operator
//... used when you don't know how many arguments will be passed
//... adds any amounts of arguments
function addAll(...nums) {
    return nums.reduce((a, b) => a + b);
}
addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
function addOrMultiply(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + num2;
    }
}
