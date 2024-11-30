// simple function can be imported by {}
// exported by default function can be imported directly
// import {add} from "./modules";
// import add from "./modules";

//importing
//import { } from module;


function add(num1: number, num2: number): number {
    return num1 + num2;
}
//Exporting a function after creation
export default add;


//exporting before creation
export function sub(num1: number, num2: number): number {
    return num1 - num2;
}
