//Interface
//It defines the structure of an object. specify the properties and their types that are being assigned

//syntax

//The user properties has been defined
interface userInfo {
    name: string;
    age: number;
    email?: string; //optional
    readonly id: number | string; //readonly
    // greet()?: string; //methods
}
//now we can assign values to hte User variable easily
const userInfo: userInfo = {
    name: "Samar",
    age: 30,
    id: "52345245",
}
