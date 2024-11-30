//Type Guards: Narrow down types using typeof or custom functions.
function isString(value: unknown): value is string {
    return typeof value === "string";
  }


//Type Assertions: Tell TypeScript the exact type of a variable.
let someValue: unknown = "Hello";
let strLength: number = (someValue as string).length;
