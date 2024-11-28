//static members
//static members are members that are shared between all instances of a class

class hero{
    static heroName = "superman";
    age = 30;
}
//directly access hero.age()
//hero.heroName
//no need to use constructor 
console.log(hero.name);
//console.log(hero.age); //invalid

