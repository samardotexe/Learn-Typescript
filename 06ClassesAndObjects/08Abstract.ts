//abstract classes and methods 
//abstract classes cannot be instantiated
//abstract classes must be extended
//abstract classes can have abstract methods
//abstract methods are methods that have no implementation
//essential base data

abstract class Shape {
    abstract getArea(): number;
}
  
class Rectangle extends Shape {
    constructor(public width: number, public height: number) {
      super();
    }

    //getArea method
    getArea(): number {
      return this.width * this.height;
    }
}
//usage
const rectangle = new Rectangle(10, 20);
console.log(rectangle.getArea());