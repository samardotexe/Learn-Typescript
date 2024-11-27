//Generic Function
//Generics use type parameters, typically denoted by <T>, where T stands for type. You can name it anything, but T is a convention.

//<T> is a type placeholder.
//T will be replaced with the actual type when the function is called.


//Variable
function identity<T>(value: T): T {
    return value;
  }
  
// Using the function
const num = identity<number>(10); // T is replaced with 'number'
const str = identity<string>("Hello"); // T is replaced with 'string'


//Array
function getFirstElement<T>(arr: T[]): T {
    return arr[0];
  }
  
const firstNumber = getFirstElement([1, 2, 3]); // T is number
const firstString = getFirstElement(["a", "b", "c"]); // T is string


//Multiple Type Parameters
//You can define multiple type parameters for complex cases.
function mapPair<T, U>(value1: T, value2: U): [T, U] {
    return [value1, value2];
  }
  
const pair = mapPair("Alice", 25); // T is string, U is number
console.log(pair); // Output: ["Alice", 25]



//Constraints on Generics
//You can constrain T to ensure it has certain properties or methods.
function getLength<T extends { length: number }>(item: T): number {
    return item.length;
  }
  
console.log(getLength("Hello")); // Works: string has length
console.log(getLength([1, 2, 3])); // Works: array has length
  // getLength(10); // Error: number does not have a 'length'



// Generic Functions with Default Types
//You can specify a default type for a generic.
function createArray<T = number>(length: number, value: T): T[] {
    return Array(length).fill(value);
  }
  
const nums = createArray(3, 42); // T is number
const strings = createArray(2, "Hello"); // T is string
  