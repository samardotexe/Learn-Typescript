//Basic Types


//Primitive Types

//number
let id: number = 5;

//string
let company: string = "Samar";

//boolean
let isPublished: boolean = true;

//unknown
let customer: unknown = 1;

//any type of data can be assigned
let x: any = "Hello";
//void
let log = (message: string): void => {
    console.log(message);
}

//null
let n: null = null;

//Union
let pid: string | number;

//Array
let ids: number[] = [1, 2, 3, 4, 5];

//undefined
let age: undefined = undefined;

//never
const error = (message: string): never => {
    throw new Error(message);
}


//Reference types

//Array
let person: [number, string, boolean] = [1, "Brad", true];

//Tuple Array
let employee: [number, string][] = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"],
];



//Enumuration 
enum UserRoles {
    Admin = "Admin",
    Moderator = "Moderator",
    User = "User"
}
