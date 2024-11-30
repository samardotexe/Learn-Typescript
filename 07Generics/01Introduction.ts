//Generics in Typescript allow you to create reusable components 
//to work with multiple data types for typesafety 
//Usefull when type of data isn't known 

//exaample
function answer<T>(value: T){
    return value
}
let a1 = answer<string>("hello");
let a2 = answer<number>(2);


//generics
function logger(a: string){
    a.replace
    a.split
    a.length
    a.concat
    //a will show all string property
}

function logger2<T>(a: T){
}

logger2<string>("hello")