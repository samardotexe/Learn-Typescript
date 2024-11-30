//Decorators are metadata annotations for classes, methods, properties, or parameters.

//Class Decorator:
function Logger(constructor: Function) {
    console.log("Logging...");
}
  
@Logger
class MyClass {}

//Method Decorator:
function Log(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    console.log(`${propertyName} was called`);
  }
  
  class myClass {
    @Logger
    print() {
      console.log("Printing...");
    }
  }
  
  