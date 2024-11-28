//In params we've to hit public/private/protected keyword

//They are called Access modifier : 

//public by default can be accessed anywhere in the class 
//private can be accessed only inside a class.
//protected can be accessed only inside a class or its child classes

class pcMaker{
    constructor(public name: string, public price: number){//here all params are public and can be accessed anywhere
        this.name = name;
        this.price = price;
    }
}
//here created a method from the class
let device = new pcMaker("Hp", 50000)
