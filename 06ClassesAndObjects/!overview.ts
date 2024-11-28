// Classes and Object
//Class definiton
class Payment{
    static balance: number = 0;//static property
    //construcot and access modifier
    constructor(protected amount: number){
        this.amount = amount//this keyword is a reference to the current object
    }
    //method
    isPaymentVaid(amount: number){
        return this.amount>0;
    }
}
class paytm extends Payment{ //inheritance
    constructor(amount: number){
        super(amount);//superkeyword used to access the property of parent class
    }
    isPaymentVaid(amount: number){
        return true;
    }
    getAmount(){//getter
        return this.amount;
    }
    setAmount(amount: number){//setter
        this.amount = amount;
    }
}

