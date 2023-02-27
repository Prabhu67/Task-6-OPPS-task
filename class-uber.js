class Uber{
    constructor(userName,kilometer,price){
        this.userName=userName
        this.kilometer=kilometer,
        this.price=price
    }
    getcalculate(){
        return this.kilometer*this.price;
    }
}

let product=new Uber("Prabhu",45,56);
console.log(product.getcalculate());