//You can restrict the types that a generic can accept using constraints like extends.
function logLength<T extends { length: number }>(item: T): void {
    console.log(item.length);
}

// Usage
logLength("Hello"); // Valid, string has length
logLength([1, 2, 3]); // Valid, array has length
//logLength(42); // Error, number doesn't have length
