"use strict";
//Basic Types
//Primitive Types
//number
let id = 5;
//string
let company = "Samar";
//boolean
let isPublished = true;
//unknown
let customer = 1;
//any type of data can be assigned
let x = "Hello";
//void
let log = (message) => {
    console.log(message);
};
//null
let n = null;
//Union
let pid;
//Array
let ids = [1, 2, 3, 4, 5];
//undefined
let age = undefined;
//never
const error = (message) => {
    throw new Error(message);
};
//Reference types
//Array
let person = [1, "Brad", true];
//Tuple Array
let employee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"],
];
//Enumuration 
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "Admin";
    UserRoles["Moderator"] = "Moderator";
    UserRoles["User"] = "User";
})(UserRoles || (UserRoles = {}));
