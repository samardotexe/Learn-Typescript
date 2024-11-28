//Inheritance 
//inheriting the property of other class into the new class 
class Animal{
    public name;
    constructor(name: string){
        this.name = name;
    }
}

class Dog extends Animal{
    public age;
    constructor(name: string, age: number){
        super(name);//super keyword is used to access the property of parent class
        this.age = age;
    }
}
