//Generic Constraints: Limit the types that can be used in generics.
function merge<T extends object, U extends object>(a: T, b: U): T & U {
    return { ...a, ...b };
  }


//Generic Utility Types: Built-in types like Partial, Required, Pick, Omit, etc.
type Person = { name: string; age: number; location: string };
type PersonWithoutLocation = Omit<Person, "location">;
