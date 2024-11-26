//Conditional Type 
//Creates types based on conditions


type IsString<T> = T extends string ? "Yes" : "No"; //btw It's a Ternary operator 
type Test1 = IsString<string>; // "Yes"
type Test2 = IsString<number>; // "No"
