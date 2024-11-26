//Mapped types
// Creates a new type by transforming properties of an existing type

//used <T> for type defining

type readonly<T> = {
    readonly [k in keyof T]: T[k]
}