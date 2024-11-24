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


function hopper<T, U>(a: T, b: U){
    console.log(a);
    console.log(b);
}

hopper<string, number>("hello", 5)




//generic interface
interface GenericIdentityFn<T>{
    (a: T): T;
}

function identity<T>(a: T): T{
    return a;
}

let myIdentity: GenericIdentityFn<number> = identity;




//generic classes

class BottleMaker<T>{
    constructor(public key: T){

    }
}

let Milton = new BottleMaker("Milton");





//important
function abcd<T>(a: T){
    return "hey";
}
abcd<string>("hey")


function abc<T>(a: T) : T{
    return "hey" as T;
}
abc<string>("hey")