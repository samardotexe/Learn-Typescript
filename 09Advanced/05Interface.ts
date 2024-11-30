//TypeScript interfaces can be extended and combined for complex use cases.
interface Animal {
    name: string;
  }
  interface Dog extends Animal {
    breed: string;
  }
 
  

//Hybrid Types: Combine callable and indexable interfaces.
interface Counter {
    (start: number): string;
    reset(): void;
  }
  