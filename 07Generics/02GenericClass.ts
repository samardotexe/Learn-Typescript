//class

class Box<T> {
    contents: T;
    constructor(value: T) {
        this.contents = value;
    }
    getContents(): T {
        return this.contents;
    }
}

// Usage
const numberBox = new Box<number>(10);
const stringBox = new Box<string>("TypeScript");
