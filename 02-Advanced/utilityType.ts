//Utility Types
//prebuilt types

//Partial Types : makes all properties optional 
type PartialPoint = Partial<Point>;
let point: PartialPoint = { x: 10 }; // 'y' is optional


//Pick types : select speicific property from a type
type XCoord = Pick<Point, "x">; // Only includes 'x'
