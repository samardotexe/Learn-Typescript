"use strict";
// simple function can be imported by {}
// exported by default function can be imported directly
// import {add} from "./modules";
// import add from "./modules";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sub = sub;
function add(num1, num2) {
    return num1 + num2;
}
exports.default = add;
function sub(num1, num2) {
    return num1 - num2;
}
