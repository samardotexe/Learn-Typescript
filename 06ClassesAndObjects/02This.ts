//this keyword
//this keyword is a reference to the current object
class setName{
    public name;
    constructor(name: string){
        this.name = name; //when you target a entity inside a constructor you've to hit This keyword reference to the current object
    }
}
let s1 = new setName("samar")
