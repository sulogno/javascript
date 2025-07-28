class product{
    constructor(name,price){
        this.name = name;
        this.price = price;

    }
    displayproduct(){
        console.log(`Product : ${this.name}`);
        console.log(`Product price : $${this.price.toFixed(2)}`);
    }
}

const procoduct1 = new product("Shirt",999);

procoduct1.displayproduct();