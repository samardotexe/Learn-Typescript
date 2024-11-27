//Interface of Function
// To define a function interface, use the interface keyword followed by the function signature.


//Basic Function Interface
//An interface for a function that adds two numbers.
interface Add {
    (a: number, b: number): number;
}
  
const add1: Add = (a, b) => a + b; // Must match the defined structure
console.log(add1(5, 10)); // Output: 15


// Function Interface with Multiple Parameter
//An interface for a function that formats a message.

interface FormatMessage {
  (name: string, age: number): string;
}
const formatMessage: FormatMessage = (name, age) => {
  return `Name: ${name}, Age: ${age}`;
};
console.log(formatMessage("Alice", 25)); // Output: Name: Alice, Age: 25


//optional parameter
interface Greet {
    (name: string, title?: string): string;
}
  
const greet1: Greet = (name, title) => {
    return title ? `Hello, ${title} ${name}` : `Hello, ${name}`;
};
  
console.log(greet1("Alice")); // Output: Hello, Alice
console.log(greet1("Alice", "Dr.")); // Output: Hello, Dr. Alice



//function with rest parameter
interface Sum {
    (...numbers: number[]): number;
}
const sum1: Sum = (...numbers) => {
    return numbers.reduce((total, num) => total + num, 0);
};
console.log(sum1(1, 2, 3, 4)); // Output: 10


//interface for call back function
interface Callback {
  (error: string | null, data: string): void;
}

function fetchData(callback: Callback) {
  const error = null; // Simulating no error
  const data = "Fetched data successfully!";
  callback(error, data);
}

fetchData((err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data); // Output: Fetched data successfully!
  }
});



//interface returning a function
interface CreateMultiplier {
    (factor: number): (value: number) => number;
}
const createMultiplier: CreateMultiplier = (factor) => {
    return (value) => factor * value;
};
const double = createMultiplier(2);
console.log(double(5)); // Output: 10



//combining function with other types
interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
}
const calculator: Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
}; 
console.log(calculator.add(10, 5)); // Output: 15
console.log(calculator.subtract(10, 5)); // Output: 5
