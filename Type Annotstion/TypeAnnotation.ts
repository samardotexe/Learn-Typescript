// Type Inference
let a = "5"; //automatically understood that its a number

// Type Annotation
let b: number = 5; //manually define the type

// Type Inference
let c = "5";

// Type Annotation
let d: string = "5";



//interfaces and type aliasses

//interface is nothing but face of function

//defining interface
interface User {
    name: string;
    id: number;
    email: string;
    role: UserRoles;
}
//defining type alias
function getUser(user: User) {
    user.role = UserRoles.Admin;
    user.email = "samar@g.com";
    user.id = 1;
    console.log(user);
    return user;
}
//defining user
getUser({
    name: "Samar",
    id: 1,
    email: "samar@g.com",
    role: UserRoles.Admin,
})



//extending interface
interface Admin extends User {
    lastName: string[];
}


//Type Aliases : Type aliases are a way to give a name to a type.


type values = string | number | boolean; 

type value = {
    name: string;
    id: number;
    email: string;
    role: UserRoles;
}


//unionn and intersection
let myId: number | string;
//example
type person = {
    name: string;
    id: number;
    email: string;
}
type person2 = person & {
    getUser(user: string): void;
}