"use strict";
// Classes and Object
//defining a class
class Device {
    constructor() {
        this.name = "lg";
        this.price = 1000;
    }
}
const d1 = new Device();
//constructor 
//constructor is a special method that is called when an object is created
class bottleMaker {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.name = name;
        this.price = price;
    }
}
let b1 = new bottleMaker("lg", 1000);
class humanMaker {
    constructor(name, age = 0) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
}
let h1 = new humanMaker("samar", 30);
let h2 = new humanMaker("samar");
//another way of constructor function
class music {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let m = new music("Qusoor", 30);
let m1 = new music("Halwa", 30);
//this keyword
//this keyword is a reference to the current object
class setName {
    constructor(name) {
        this.name = name; //when you target a entity inside a constructor you've to hit This keyword reference to the current object
    }
}
let s1 = new setName("samar");
//Access modifier : 
//public and private
//public by default can be accessed anywhere in the class 
//private can be accessed only inside a class.
//protected can be accessed only inside a class or its child classes
//Inheritance 
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}
//optional properties and parameter properties
//add ? to the property name to make it optional
//getter and setter
//getter gets the value from the class
//setter changes and updates the value from the class
//when we add _ before variable name sets the variable to be alterable  for getter (get _var()) and (setter set _var())
//static members
//static members are members that are shared between all instances of a class
class hero {
}
hero.heroName = "superman";
hero.age = 30;
//directly access hero.age()
//hero.heroName
//abstract classes and methods 
//abstract classes cannot be instantiated
//abstract classes can have abstract methods
//abstract methods are methods that have no implementation
//essential base data
class Payment {
    constructor(amount) {
        this.amount = amount;
    }
    isPaymentVaid(amount) {
        return this.amount > 0;
    }
}
class paytm extends Payment {
    constructor(amount) {
        super(amount);
    }
    isPaymentVaid(amount) {
        return true;
    }
}
