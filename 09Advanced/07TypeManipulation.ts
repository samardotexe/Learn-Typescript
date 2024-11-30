//Type Manipulations
//Manipulate types dynamically.
//Key Remapping in Mapped Types:
type Mapped<T> = {
    [K in keyof T as `new_${string & K}`]: T[K];
  };
  

//Template Literal Types: Create types using template literals.
type event = "click" | "hover";
type EventHandler = `on${Capitalize<event>}`;
