
//getter and setter
//getter gets the value from the class
//setter changes and updates the value from the class
//when we add _ before variable name sets the variable to be alterable  for getter (get _var()) and (setter set _var())

class classroom{
    constructor(public name: string, public age: number = 15){//If we provide age it will accept it or it will take default value
        this.name = name;
        this.age = age;
    }
    get _name(): string { //gets the value
        return this.name;
    }
    set _name(name: string) {//sets the value
        this.name = name;
    }
}

const class1 = new classroom("Samar", 15);