//Generic Interfaces
//Generic interfaces allow you to define the structure of objects with types determined dynamically.
interface Pair<T, U> {
    first: T;
    second: U;
}

const Pair: Pair<number, string> = { first: 1, second: "One" };
