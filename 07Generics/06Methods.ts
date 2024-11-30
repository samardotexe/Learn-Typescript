//Generic Method

class Utility {
    static swap<T, U>(a: T, b: U): [U, T] {
        return [b, a];
    }
}

const swapped = Utility.swap<number, string>(1, "Hello");
