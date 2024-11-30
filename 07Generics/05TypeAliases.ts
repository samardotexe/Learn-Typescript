//Generic Type Aliases
//You can create generic types using type.

type Result<T> = { success: boolean; data: T };

const stringResult: Result<string> = { success: true, data: "OK" };
const numberResult: Result<number> = { success: true, data: 123 };
