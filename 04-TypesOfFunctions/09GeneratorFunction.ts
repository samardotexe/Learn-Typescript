//Generator Function
//Function that can pause or resume operation

function* generator(){
    yield 1;
    yield 2;
}
const gen = generator()
console.log(gen)