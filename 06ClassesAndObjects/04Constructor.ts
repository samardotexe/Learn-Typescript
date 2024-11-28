//constructor 
//constructor is a special method that is called when an object is created
//here in constructor we've to hit This keyword reference to the current object
//in params we've to hit public/private/protected keyword
//they are called Access Modifier
class bottleMaker{
    constructor(public name: string, public price: number){//here all params are public and can be accessed anywhere
        this.name = name;
        this.price = price;
    }
}
//here created a method from the class
let b1 = new bottleMaker("Milton", 1000)



//Constructor with default value
//In params the default value is already assigned 
class humanMaker{
    constructor(public name: string, public age: number = 0){//If we provide age it will accept it or it will take default value
        this.name = name;
        this.age = age;
    }
}

let h1 = new humanMaker("samar", 30)//valid
let h2 = new humanMaker("samar")//valid


//another way of constructor function
//in this we've to hit public/private/protected keyword outside the params
class music{
    public name;//valid
    public age;//valid
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

let m = new music("Soft", 30);
let m1 = new music("Trip", 30);


//optional parameter value
//added ? before type assingning makes the variable optionval to recive value
//Either you provide it or not it still runs

class specification{
    constructor(public name: string, public price: number , public processor?: string,public ram?: number){
        this.name = name;
        this.price = price;
        this.processor = processor;//if we provide this or not constructor still runs
        this.ram = ram;//if we provide this or not constructor still runs
    }
}

let specs1 = new specification("Intel", 30, "i7", 16);//valid
let specs2 = new specification("AMD", 30);//valid