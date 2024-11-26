//Intersection Type
//It combines ultiple types into one.
//The variable must satisfy all the combined types

//type keyword used to asign type of data should variable recieve
type x = {name: string};
type y = {age: number}
type z = x & y //It merges the variable data type recieving properties and combines it and stores it into a variable named z

//now z can hold {name: string; age: number}




