//function : a block of code which only runs when it is called function
//function is a reusable block of code
//function is a set of statements that performs a task or calculates a value

function add(num1: number, num2: number): number {
    return num1 + num2;
}


//optional parameter
function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

//default parameter
function substract(num1: number, num2: number = 10): number {
    return num1 - num2;
}


//rest parameter

//... rest/spread operator
//... used when you don't know how many arguments will be passed
//... adds any amounts of arguments
function addAll(...nums: number[]): number {
    return nums.reduce((a, b) => a + b);
}
addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//overloading

function addOrMultiply(num1: number, num2: number): number;
function addOrMultiply(num1: string, num2: string): string;
function addOrMultiply(num1: any, num2: any): any {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    } else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + num2;
    }
}
