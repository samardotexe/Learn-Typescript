//Intersection Types: Combine multiple types into one
type worker = { name: string; privileges: string[] };
type Employee = { name: string; startDate: Date };
type ElevatedEmployee = Admin & Employee;


//Union Type
type Input = string | number;


//Mapped Type
type ReadOnly<T> = { readonly [K in keyof T]: T[K] };


//Condtional Types
type isString<T> = T extends string ? true : false;
