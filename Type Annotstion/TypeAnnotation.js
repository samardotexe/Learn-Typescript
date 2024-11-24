"use strict";
// Type Inference
let a = "5"; //automatically understood that its a number
// Type Annotation
let b = 5; //manually define the type
// Type Inference
let c = "5";
// Type Annotation
let d = "5";
//defining type alias
function getUser(user) {
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
});
//unionn and intersection
let myId;
