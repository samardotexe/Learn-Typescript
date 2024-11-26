"use strict";
//Optional Parameter function 
//It uses ? to mark parameter as optional 
//weather you provide it or not it still runs 
function greet(name, age) {
    return age ? `Hello ${name}, You are ${age}yo` : `Hello ${name}`; //here I used Ternary if-else operator
}
